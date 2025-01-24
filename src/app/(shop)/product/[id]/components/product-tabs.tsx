export default function ProductTabs() {
  return (
    <div className="tabs-container">
      <nav>
        {[
          'DESCRIPTION',
          'ADDITIONAL INFORMATION',
          'SPECIFICATION',
          'REVIEW',
        ].map((tab, i) => (
          <button
            key={tab}
            className={`tab ${
              i === 0
                ? 'active'
                : 'inactive'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
