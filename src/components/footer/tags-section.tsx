export default function TagsSection({ tags }: { tags: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold">POPULAR TAG</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <a
            key={tag}
            href="#"
            className="px-3 py-1 text-xs bg-transparent border border-[#303639] rounded-xs"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
