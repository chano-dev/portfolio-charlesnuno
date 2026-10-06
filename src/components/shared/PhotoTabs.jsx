export default function PhotoTabs({ tabs = [], activeTab, onChange, label, hideTabs = false }) {
  return (
    <div
      className={`photo-tabs ${hideTabs ? 'tabs-hidden' : ''}`}
      role="tablist"
      aria-label={label}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          className={`photo-tab ${activeTab === tab.id ? 'is-active' : ''}`}
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
