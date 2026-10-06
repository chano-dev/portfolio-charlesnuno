export function validateGallery({ tabs = [], items = [], name = 'Gallery' }) {
  if (!import.meta.env.DEV) return
  const tabIds = new Set(tabs.map((t) => t.id))
  const ids = items.map((i) => i.id)
  if (new Set(ids).size !== ids.length) {
    console.warn(`[validate] ${name}: IDs duplicados`)
  }
  items.forEach((it) => {
    if (!tabIds.has(it.tab)) {
      console.warn(`[validate] ${name}: item ${it.id} tem tab desconhecido "${it.tab}"`)
    }
    if (it.img && !it.img.startsWith('/')) {
      console.warn(`[validate] ${name}: ${it.id} img sem "/" inicial: ${it.img}`)
    }
    if (it.type === 'video' && !it.youtube) {
      console.warn(`[validate] ${name}: ${it.id} video sem youtube`)
    }
    if (it.maps && !it.local) {
      console.warn(`[validate] ${name}: ${it.id} maps sem local`)
    }
    if (it.local && !it.maps) {
      console.warn(`[validate] ${name}: ${it.id} local sem maps`)
    }
  })
}

export function validateSections({ sections = [], name = 'Sections' }) {
  if (!import.meta.env.DEV) return
  const ids = sections.map((s) => s.id)
  if (new Set(ids).size !== ids.length) {
    console.warn(`[validate] ${name}: IDs duplicados`)
  }
}

export function validateI18nKeys(keys = []) {
  if (!import.meta.env.DEV) return
  keys.forEach((k) => {
    if (typeof k === 'string' && k) {
      // no-op
    }
  })
}
