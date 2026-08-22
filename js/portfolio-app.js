(() => {
    'use strict';

    const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktopMq = window.matchMedia('(min-width: 768px)');

    /* ────────────────────────────────────────────
       1. THEME
    ──────────────────────────────────────────── */
    const Theme = (() => {
        const KEY = 'cn-theme';

        const get = () => (localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light');

        const apply = () => {
            const theme = get();
            const dark = theme === 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            document.querySelectorAll('.navbar__btn--theme').forEach((btn) => {
                const lightIcon = btn.querySelector('.icon-light');
                const darkIcon = btn.querySelector('.icon-dark');
                if (lightIcon) lightIcon.hidden = dark;
                if (darkIcon) darkIcon.hidden = !dark;
                const label = btn.querySelector('.btn-label');
                if (label) label.textContent = i18n.t(dark ? 'nav.theme_dark' : 'nav.theme');
                btn.setAttribute('aria-pressed', String(dark));
            });
        };

        const toggle = () => {
            localStorage.setItem(KEY, get() === 'dark' ? 'light' : 'dark');
            apply();
        };

        const init = () => {
            apply();
            document.querySelectorAll('.navbar__btn--theme').forEach((btn) => {
                btn.addEventListener('click', toggle);
            });
        };

        return { init, apply, get };
    })();

    /* ────────────────────────────────────────────
       2. LANGUAGE
    ──────────────────────────────────────────── */
    const Language = (() => {
        const KEY = 'cn-lang';

        const get = () => {
            const saved = localStorage.getItem(KEY);
            return i18n.langs.indexOf(saved) !== -1 ? saved : 'en';
        };

        const closeAll = () => {
            document.querySelectorAll('.navbar__lang-wrapper').forEach((wrapper) => {
                const dd = wrapper.querySelector('.lang-dropdown');
                const btn = wrapper.querySelector('.navbar__btn--lang');
                if (dd) dd.hidden = true;
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        };

        const refreshDropdowns = () => {
            const lang = i18n.getLang();
            document.querySelectorAll('.lang-dropdown').forEach((dd) => {
                dd.querySelectorAll('li[data-lang]').forEach((li) => {
                    li.setAttribute('aria-selected', String(li.getAttribute('data-lang') === lang));
                });
            });
        };

        const set = (lang) => {
            if (i18n.langs.indexOf(lang) === -1) return;
            localStorage.setItem(KEY, lang);
            i18n.setLang(lang);
            refreshDropdowns();
            Theme.apply();
            Typewriter.restart();
            Sections.renderTOC();
            PhotoFilter.refreshLabels();
            NextSection.refreshLabels();
        };

        const init = () => {
            document.querySelectorAll('.navbar__btn--lang').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const dd = btn.closest('.navbar__lang-wrapper').querySelector('.lang-dropdown');
                    const wasOpen = dd && !dd.hidden;
                    closeAll();
                    if (dd) dd.hidden = wasOpen;
                    btn.setAttribute('aria-expanded', String(!wasOpen));
                });
            });

            document.querySelectorAll('.lang-dropdown li[data-lang]').forEach((li) => {
                li.addEventListener('click', () => {
                    set(li.getAttribute('data-lang'));
                    closeAll();
                });
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar__lang-wrapper')) closeAll();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeAll();
            });

            const lang = get();
            if (lang !== i18n.getLang()) i18n.setLang(lang);
            refreshDropdowns();
            Theme.apply();
        };

        return { init, get, set };
    })();

    /* ────────────────────────────────────────────
       3. SECTIONS
    ──────────────────────────────────────────── */
    const Sections = (() => {
        const defaultTocMap = {
            'about-me': [
                { key: 'about.who', href: '#who-am-i' },
                { key: 'about.what', href: '#what-i-do' },
                { key: 'about.why', href: '#why-i-do' },
            ],
            'work': [
                { key: 'work.mc', href: '#master-of-ceremony' },
                { key: 'work.rv', href: '#content-creator-video-editor' },
                { key: 'work.dc', href: '#designer-copywriter' },
            ],
            'contacts': [
                { key: 'contacts.email', href: '#email' },
                { key: 'contacts.phone', href: '#phone' },
                { key: 'contacts.social', href: '#social' },
            ],
        };

        const tocMap = window.CN_TOC_MAP || defaultTocMap;
        const main = document.getElementById('main-content');
        let activeId = document.body.getAttribute('data-active-section') || 'about-me';

        const renderTOC = () => {
            const desktopList = document.getElementById('toc-desktop-links');
            document.querySelectorAll('.section[data-section]').forEach((sec) => {
                const id = sec.getAttribute('data-section');
                const mobileList = document.getElementById('toc-mobile-links-' + id);
                const items = tocMap[id] || [];
                const html = items
                    .map((item) => '<li><a href="' + item.href + '">' + escapeHtml(i18n.t(item.key)) + '</a></li>')
                    .join('');
                if (desktopList && id === activeId) desktopList.innerHTML = html;
                if (mobileList) mobileList.innerHTML = html;
            });
        };

        const show = (id) => {
            if (!document.getElementById('section-' + id)) return;
            activeId = id;
            document.querySelectorAll('.section[data-section]').forEach((sec) => {
                sec.hidden = sec.getAttribute('data-section') !== id;
            });
            document.body.setAttribute('data-active-section', id);
            document.querySelectorAll('.sidebar__section-btn[data-section]').forEach((btn) => {
                btn.classList.toggle('is-active', btn.getAttribute('data-section') === id);
            });
            document.querySelectorAll('.drawer__section-item[data-section]').forEach((item) => {
                item.classList.toggle('is-active', item.getAttribute('data-section') === id);
            });
            renderTOC();
            if (main) main.scrollTop = 0;
            document.dispatchEvent(new CustomEvent('cn:section-changed', { detail: { sectionId: id } }));
        };

        const init = () => {
            document.querySelectorAll('.sidebar__section-btn[data-section]').forEach((btn) => {
                btn.addEventListener('click', () => show(btn.getAttribute('data-section')));
            });
            show(activeId);
        };

        const isActive = (id) => id === activeId;

        return { init, show, renderTOC, isActive, getActive: () => activeId };
    })();

    /* ────────────────────────────────────────────
       4. ACCORDION (drawer only)
    ──────────────────────────────────────────── */
    const Accordion = (() => {
        const setOpen = (id, open) => {
            document.querySelectorAll('.drawer__section-item[data-section]').forEach((item) => {
                const sid = item.getAttribute('data-section');
                const isOpen = sid === id && open;
                const btn = item.querySelector('.drawer__section-btn');
                const sub = document.getElementById('drawer-sub-' + sid);
                if (btn) btn.setAttribute('aria-expanded', String(isOpen));
                if (sub) sub.hidden = !isOpen;
            });
        };

        const init = () => {
            document.querySelectorAll('.drawer__section-btn').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const item = btn.closest('.drawer__section-item');
                    const id = item ? item.getAttribute('data-section') : null;
                    if (!id) return;
                    if (Sections.isActive(id)) {
                        const currentlyOpen = btn.getAttribute('aria-expanded') === 'true';
                        setOpen(id, !currentlyOpen);
                    } else {
                        Sections.show(id);
                    }
                });
            });
            document.addEventListener('cn:section-changed', (e) => {
                setOpen(e.detail.sectionId, true);
            });
            const initial = document.body.getAttribute('data-active-section') || 'about-me';
            setOpen(initial, true);
        };

        return { init };
    })();

    /* ────────────────────────────────────────────
       5. DRAWER
    ──────────────────────────────────────────── */
    const Drawer = (() => {
        const btnMenu = document.getElementById('btn-menu');
        const drawer = document.getElementById('drawer');
        const overlay = document.getElementById('drawer-overlay');

        const open = () => {
            if (!drawer || !overlay) return;
            drawer.classList.add('is-open');
            overlay.classList.add('is-visible');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            if (btnMenu) btnMenu.setAttribute('aria-expanded', 'true');
        };

        const close = () => {
            if (!drawer || !overlay) return;
            drawer.classList.remove('is-open');
            overlay.classList.remove('is-visible');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            if (btnMenu) btnMenu.setAttribute('aria-expanded', 'false');
        };

        const init = () => {
            if (btnMenu) {
                btnMenu.addEventListener('click', () => {
                    if (drawer && drawer.classList.contains('is-open')) close();
                    else open();
                });
            }
            if (overlay) overlay.addEventListener('click', close);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') close();
            });
            if (drawer) {
                drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
            }
        };

        return { init, open, close };
    })();

    /* ────────────────────────────────────────────
       6. TOC (scrollspy)
    ──────────────────────────────────────────── */
    const TOC = (() => {
        let observer = null;

        const setActive = (id) => {
            document.querySelectorAll('.toc__links a, .drawer__sub-links a').forEach((a) => {
                a.classList.toggle('is-active', !!id && a.getAttribute('href') === '#' + id);
            });
        };

        const observe = () => {
            if (observer) observer.disconnect();
            const section = document.getElementById('section-' + Sections.getActive());
            if (!section) return;
            const articles = Array.from(section.querySelectorAll('.article[id]'));
            if (!articles.length) return;

            observer = new IntersectionObserver(() => {
                const line = window.innerHeight * 0.4;
                let current = null;
                articles.forEach((article) => {
                    if (article.getBoundingClientRect().top <= line) current = article.id;
                });
                setActive(current || (articles[0] ? articles[0].id : null));
            }, { rootMargin: '0px 0px -60% 0px' });

            articles.forEach((article) => observer.observe(article));
            setActive(articles[0] ? articles[0].id : null);
        };

        const init = () => {
            observe();
            document.addEventListener('cn:section-changed', observe);
        };

        return { init };
    })();

    /* ────────────────────────────────────────────
       7. TYPEWRITER
    ──────────────────────────────────────────── */
    const Typewriter = (() => {
        const DEFAULTS = [
            'Feel right at home.',
            'Faites comme chez vous.',
            '宾至如归。',
            'Sinta-se em casa.',
        ];
        const raw = window.CN_TAGLINES || {};
        const taglines = [
            raw.en || DEFAULTS[0],
            raw.fr || DEFAULTS[1],
            raw.zh || DEFAULTS[2],
            raw.pt || DEFAULTS[3],
        ];
        const targets = () => [
            document.getElementById('sidebar-typewriter'),
            document.getElementById('drawer-typewriter'),
        ];

        let timer = null;
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const setText = (text) => {
            targets().forEach((el) => {
                if (el) el.textContent = text;
            });
        };

        const step = () => {
            const text = taglines[textIndex];
            if (!isDeleting) {
                setText(text.substring(0, charIndex + 1));
                charIndex += 1;
                if (charIndex === text.length) {
                    isDeleting = true;
                    timer = setTimeout(step, 1800);
                    return;
                }
            } else {
                setText(text.substring(0, charIndex - 1));
                charIndex -= 1;
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % taglines.length;
                }
            }
            timer = setTimeout(step, isDeleting ? 40 : 90);
        };

        const start = () => {
            if (timer) clearTimeout(timer);
            textIndex = 0;
            charIndex = 0;
            isDeleting = false;
            step();
        };

        const restart = start;

        return { start, restart };
    })();

    /* ────────────────────────────────────────────
       8. SKELETON
    ──────────────────────────────────────────── */
    const Skeleton = (() => {
        const FLAG = 'cn-skeleton';
        const DURATION = 900;

        const init = () => {
            if (sessionStorage.getItem(FLAG)) return;
            document.body.classList.add('skeleton-active');
            ['.sidebar--left', '.sidebar--right', '.content', '.toc-mobile'].forEach((sel) => {
                document.querySelectorAll(sel).forEach((el) => el.classList.add('is-skeleton'));
            });
            setTimeout(() => {
                document.body.classList.remove('skeleton-active');
                document.querySelectorAll('.is-skeleton').forEach((el) => el.classList.remove('is-skeleton'));
                sessionStorage.setItem(FLAG, '1');
            }, DURATION);
        };

        return { init };
    })();

    /* ────────────────────────────────────────────
       9. PHOTO FILTER
    ──────────────────────────────────────────── */
    const PhotoFilter = (() => {
        const galleries = [];

        const limit = () => (desktopMq.matches ? 6 : 4);

        const showItem = (item) => {
            item.hidden = false;
            if (item.classList.contains('photo-grid__item--extra')) item.classList.add('is-visible');
        };

        const hideItem = (item) => {
            item.hidden = true;
            item.classList.remove('is-visible');
        };

        const render = (gallery) => {
            const grid = gallery.querySelector('.photo-grid');
            if (!grid) return;
            const items = Array.from(grid.querySelectorAll('.photo-grid__item'));
            const activeTab = gallery.querySelector('.photo-tab.is-active');
            const filter = activeTab
                ? activeTab.getAttribute('data-filter')
                : (items[0] ? items[0].getAttribute('data-tab') : null);
            const tabItems = items.filter((i) => i.getAttribute('data-tab') === filter);
            const moreBtn = gallery.querySelector('.photo-more-btn');
            const expanded = gallery.__expanded === true;
            const max = limit();

            items.forEach((item) => {
                if (item.getAttribute('data-tab') !== filter) {
                    hideItem(item);
                    return;
                }
                const idx = tabItems.indexOf(item);
                if (expanded || idx < max) showItem(item);
                else hideItem(item);
            });

            if (!moreBtn) return;
            if (tabItems.length > max) {
                moreBtn.hidden = false;
                moreBtn.setAttribute('aria-expanded', String(expanded));
                const label = moreBtn.querySelector('.photo-more-btn__label');
                if (label) label.textContent = i18n.t(expanded ? 'gallery.see_less' : 'gallery.see_more');
            } else {
                moreBtn.hidden = true;
            }
        };

        const renderAll = () => galleries.forEach(render);

        const init = () => {
            document.querySelectorAll('.article').forEach((article) => {
                if (!article.querySelector('.photo-grid')) return;
                galleries.push(article);

                article.querySelectorAll('.photo-tab').forEach((tab) => {
                    tab.addEventListener('click', () => {
                        article.querySelectorAll('.photo-tab').forEach((t) => {
                            const on = t === tab;
                            t.classList.toggle('is-active', on);
                            t.setAttribute('aria-selected', String(on));
                        });
                        article.__expanded = false;
                        render(article);
                    });
                });

                const moreBtn = article.querySelector('.photo-more-btn');
                if (moreBtn) {
                    moreBtn.addEventListener('click', () => {
                        article.__expanded = !(article.__expanded === true);
                        render(article);
                    });
                }
            });
            renderAll();
        };

        return { init, renderAll, refreshLabels: renderAll };
    })();

    /* ────────────────────────────────────────────
       10. LIGHTBOX
    ──────────────────────────────────────────── */
    const Lightbox = (() => {
        const box = document.getElementById('lightbox');
        let videoEl = null;

        const removeVideo = () => {
            if (videoEl) {
                videoEl.remove();
                videoEl = null;
            }
        };

        const close = () => {
            if (!box || box.hidden) return;
            box.hidden = true;
            box.classList.remove('lightbox--video', 'lightbox--contain');
            removeVideo();
            document.body.style.overflow = '';
        };

        const open = (btn) => {
            if (!box) return;
            const type = btn.getAttribute('data-type');
            const isMedia = type === 'video' || type === 'tiktok';
            const imgEl = box.querySelector('.lightbox__img');
            const sourceImg = btn.querySelector('img');

            removeVideo();
            if (isMedia) {
                box.classList.add('lightbox--video');
                const iframe = document.createElement('iframe');
                iframe.className = 'lightbox__video';
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                iframe.setAttribute('allowfullscreen', '');
                iframe.title = btn.getAttribute('aria-label') || 'Embedded media';
                if (type === 'video') {
                    iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.getAttribute('data-youtube') + '?autoplay=1';
                } else {
                    iframe.src = btn.getAttribute('data-tiktok') || '';
                }
                imgEl.after(iframe);
                videoEl = iframe;
            } else {
                box.classList.remove('lightbox--video');
                imgEl.src = sourceImg ? sourceImg.src : '';
                imgEl.alt = sourceImg ? sourceImg.alt : '';
            }

            const isArchive = btn.hasAttribute('data-local');
            const local = box.querySelector('.lightbox__local');
            const contexto = box.querySelector('.lightbox__contexto');
            if (isArchive) {
                local.hidden = false;
                local.textContent = btn.getAttribute('data-local');
                local.href = btn.getAttribute('data-maps') || '#';
                contexto.hidden = true;
            } else {
                local.hidden = true;
                contexto.hidden = false;
                contexto.textContent = btn.getAttribute('data-contexto') || '';
            }

            // Work images show the full picture (contain); Archives keep cover.
            box.classList.toggle('lightbox--contain', !isMedia && !isArchive);

            // External project link (Landing Page / Figma / portfolio).
            const link = box.querySelector('.lightbox__link');
            const projectUrl = btn.getAttribute('data-link');
            if (projectUrl) {
                link.hidden = false;
                link.href = projectUrl;
                const labelKey = btn.getAttribute('data-link-label-key');
                link.textContent = (labelKey && i18n.t(labelKey))
                    || btn.getAttribute('data-link-label')
                    || i18n.t('work.open_link');
            } else {
                link.hidden = true;
            }

            box.querySelector('.lightbox__ano').textContent = btn.getAttribute('data-ano') || '';
            box.querySelector('.lightbox__evento').textContent = btn.getAttribute('data-subtitulo') || '';
            const descKey = btn.getAttribute('data-desc-key');
            box.querySelector('.lightbox__descricao').textContent =
                descKey ? i18n.t(descKey) : (btn.getAttribute('data-descricao') || '');

            const skills = btn.getAttribute('data-skills');
            const skillsBox = box.querySelector('.lightbox__skills');
            const pills = box.querySelector('.lightbox__skills-pills');
            pills.innerHTML = '';
            if (skills) {
                skills.split(',').forEach((skill) => {
                    const span = document.createElement('span');
                    span.className = 'skill-pill';
                    span.textContent = skill.trim();
                    pills.appendChild(span);
                });
                skillsBox.hidden = false;
            } else {
                skillsBox.hidden = true;
            }

            const highlights = btn.getAttribute('data-highlights');
            const highlightsBox = box.querySelector('.lightbox__highlights');
            if (highlightsBox) {
                const highlightPills = highlightsBox.querySelector('.lightbox__highlights-pills');
                highlightPills.innerHTML = '';
                if (highlights) {
                    highlights.split(',').forEach((item) => {
                        const span = document.createElement('span');
                        span.className = 'skill-pill';
                        span.textContent = item.trim();
                        highlightPills.appendChild(span);
                    });
                    highlightsBox.hidden = false;
                } else {
                    highlightsBox.hidden = true;
                }
            }

            box.hidden = false;
            document.body.style.overflow = 'hidden';
        };

        const init = () => {
            if (!box) return;
            box.querySelector('.lightbox__close').addEventListener('click', close);
            box.querySelector('.lightbox__backdrop').addEventListener('click', close);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') close();
            });
            document.querySelectorAll('.photo-grid__item').forEach((item) => {
                item.addEventListener('click', () => open(item));
            });
        };

        return { init };
    })();

    /* ────────────────────────────────────────────
       11. QUOTE CAROUSEL
    ──────────────────────────────────────────── */
    const QuoteCarousel = (() => {
        const INTERVAL = 5000;
        let timer = null;
        let index = 0;
        let offset = 0;

        const desktopStep = () => {
            const track = document.getElementById('quotes-track');
            if (!track) return;
            const items = track.querySelectorAll('.quote-item');
            if (!items.length) return;
            const gap = parseFloat(getComputedStyle(track).gap) || 0;
            const step = items[0].offsetWidth + gap;
            const from = -(offset * step);
            const to = -(offset + 1) * step;

            if (reducedMotion) {
                offset += 1;
                if (offset >= items.length) {
                    track.appendChild(items[0]);
                    track.style.transform = 'translateX(0)';
                    offset = 0;
                } else {
                    track.style.transform = 'translateX(' + to + 'px)';
                }
                return;
            }

            const anim = track.animate(
                [
                    { transform: 'translateX(' + from + 'px)' },
                    { transform: 'translateX(' + to + 'px)' },
                ],
                { duration: 700, easing: 'ease-in-out' }
            );
            anim.onfinish = () => {
                offset += 1;
                if (offset >= items.length) {
                    track.appendChild(items[0]);
                    track.style.transform = 'translateX(0)';
                    offset = 0;
                } else {
                    track.style.transform = 'translateX(' + to + 'px)';
                }
            };
        };

        const mobileStep = () => {
            const track = document.getElementById('quotes-track');
            if (!track) return;
            const items = track.querySelectorAll('.quote-item');
            if (!items.length) return;
            index = (index + 1) % items.length;
            track.style.transform = 'translateX(-' + index * 100 + '%)';
        };

        const tick = () => {
            if (desktopMq.matches) desktopStep();
            else mobileStep();
        };

        const start = () => {
            stop();
            timer = setInterval(tick, INTERVAL);
        };

        const stop = () => {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        };

        return { start, stop };
    })();

    /* ────────────────────────────────────────────
       12. COMPASS BUTTON
    ──────────────────────────────────────────── */
    const CompassBtn = (() => {
        const btn = document.getElementById('compass-btn');
        let observer = null;
        let card = null;

        const show = () => {
            if (!btn) return;
            btn.hidden = false;
            btn.classList.add('is-visible');
        };

        const hide = () => {
            if (!btn) return;
            btn.hidden = true;
            btn.classList.remove('is-visible');
        };

        const observe = () => {
            if (observer) observer.disconnect();
            if (desktopMq.matches || !btn) {
                card = null;
                hide();
                return;
            }
            card = document.getElementById('toc-mobile-' + Sections.getActive());
            if (!card) {
                hide();
                return;
            }
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) hide();
                    else show();
                });
            }, {});
            observer.observe(card);
        };

        const init = () => {
            if (!btn) return;
            btn.addEventListener('click', () => {
                if (card) card.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
            });
            if (desktopMq.addEventListener) desktopMq.addEventListener('change', observe);
            else if (desktopMq.addListener) desktopMq.addListener(observe);
            document.addEventListener('cn:section-changed', observe);
            observe();
        };

        return { init };
    })();

    /* ────────────────────────────────────────────
       13. NEXT SECTION
    ──────────────────────────────────────────── */
    const NextSection = (() => {
        let links = [];

        const refreshLabels = () => {
            links.forEach((link) => {
                const key = link.getAttribute('data-i18n-next');
                if (key) link.textContent = i18n.t(key);
            });
        };

        const init = () => {
            links = Array.from(document.querySelectorAll('.inline-link[data-next-section]'));
            refreshLabels();
            links.forEach((link) => {
                link.addEventListener('click', () => Sections.show(link.getAttribute('data-next-section')));
            });
        };

        return { init, refreshLabels };
    })();

    /* ────────────────────────────────────────────
       INIT SEQUENCE
    ──────────────────────────────────────────── */
    const init = () => {
        Skeleton.init();
        Theme.init();
        Language.init();
        Sections.init();
        Accordion.init();
        Drawer.init();
        TOC.init();
        Typewriter.start();
        PhotoFilter.init();
        Lightbox.init();
        QuoteCarousel.start();
        CompassBtn.init();
        NextSection.init();

        window.addEventListener('resize', () => {
            PhotoFilter.renderAll();
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

