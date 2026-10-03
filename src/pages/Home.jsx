import Typewriter from '../components/Typewriter'

export default function Home() {
  return (
    <>
      <header>
        <h1>I'm Charles Nuno.</h1>
        <h2>Welcome to my Portfolios.</h2>
      </header>

      <main>
        <div className="cards-wrapper">
          <Typewriter />

          <div className="cards-grid">
            {/* CARD: COMMUNICATION */}
            <article>
              <a href="/co" className="card-border" aria-label="View Communicator portfolio">
                <div className="card-inner card">
                  <div className="card-topbar">
                    <span className="card-icon icon-communication" aria-hidden="true"></span>
                    <span className="card-icon icon-communication" aria-hidden="true"></span>
                  </div>

                  <h3 className="card-title">Communicator</h3>

                  <div className="card-image-frame">
                    <img
                      className="card-svg"
                      src="/img/mask.png"
                      alt="Traditional African mask symbolizing the Communicator portfolio"
                    />
                  </div>

                  <p className="card-desc">
                    This card represents my work in:
                    Copywriting; Content Creation; Video Editing; Public Speaking; Graphic Design; Scriptwriting.
                    Skills built across written, visual, and verbal communication, the toolkit behind every strong advertising campaign, brand voice, or public message.
                  </p>

                  <div className="card-bottombar">
                    <span className="card-icon icon-communication" aria-hidden="true"></span>
                    <span className="card-icon icon-communication" aria-hidden="true"></span>
                  </div>
                </div>
              </a>

              <a href="/co" className="btn-portfolio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                </svg>
                See Portfolio
              </a>
            </article>

            {/* CARD: PROGRAMMING */}
            <article>
              <a href="/pr" className="card-border" aria-label="View Developer portfolio">
                <div className="card-inner card">
                  <div className="card-topbar">
                    <span className="card-icon icon-programming" aria-hidden="true"></span>
                    <span className="card-icon icon-programming" aria-hidden="true"></span>
                  </div>

                  <h3 className="card-title">Developer</h3>

                  <div className="card-image-frame">
                    <img
                      className="card-svg"
                      src="/img/thinker.png"
                      alt="Silhouette of a thinker symbolizing the Developer portfolio"
                    />
                  </div>

                  <p className="card-desc">
                    This card represents my work in:
                    Front-End Development; UI/UX Design; AI-Assisted Development; Mentoring; Version Control (Git); SEO Best Practices.
                    A self-taught path, driven by curiosity and creativity, shaping the way I design, build, and explain code to others.
                  </p>

                  <div className="card-bottombar">
                    <span className="card-icon icon-programming" aria-hidden="true"></span>
                    <span className="card-icon icon-programming" aria-hidden="true"></span>
                  </div>
                </div>
              </a>

              <a href="/pr" className="btn-portfolio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                </svg>
                See Portfolio
              </a>
            </article>
          </div>
        </div>
      </main>

      <footer>
        <p>2003 - Designed and Developed by Charles Nuno. &copy;</p>
      </footer>
    </>
  )
}