export default function ProductTabs() {
  return (
    <div className="flex w-full overflow-auto border-b border-gray-200 px-10">
      <nav className="flex items-center gap-5 mx-auto">
        {[
          'DESCRIPTION',
          'ADDITIONAL INFORMATION',
          'SPECIFICATION',
          'REVIEW',
        ].map((tab, i) => (
          <button
            key={tab}
            className={`border-b-2 px-1 py-4 text-sm font-medium ${
              i === 0
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500 hover:border-orange-300 hover:text-orange-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
