export default function GalleryItem({ item, onSelect }) {
  return (
    <div className="photo-grid__item-wrap" role="listitem">
      <button
        type="button"
        className="photo-grid__item"
        aria-label={item.local ? `${item.local}, ${item.ano}` : `${item.evento}, ${item.ano}`}
        onClick={() => onSelect(item)}
      >
        <img src={item.img} alt={item.alt} loading="lazy" />
        {item.type === 'video' && (
          <span className="photo-grid__play" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.55)" />
              <polygon points="10 8 17 12 10 16" fill="#fff" />
            </svg>
          </span>
        )}
      </button>
    </div>
  )
}
