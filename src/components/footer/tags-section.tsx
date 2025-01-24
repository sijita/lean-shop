export default function TagsSection({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      <h3 className="title">POPULAR TAG</h3>
      <div className="items">
        {tags.map((tag) => (
          <a key={tag} href="#">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
