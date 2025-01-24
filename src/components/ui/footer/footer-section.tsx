interface SectionProps {
  title?: string;
  subtitle?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  items?: string[];
}

export default function Section({
  title,
  subtitle,
  text1,
  text2,
  text3,
  text4,
  items = [],
}: SectionProps) {
  return (
    <div className="section">
      <h3 className="title">{title}</h3>
      {subtitle && (
        <div className="sub-section">
          <p className="subtitle">{subtitle}</p>
          <p className="text1">{text1}</p>
          <div>
            <p className="text2">{text2}</p>
            <p className="text3">{text3}</p>
          </div>
          <p className="text4">{text4}</p>
        </div>
      )}
      {items.length > 0 && (
        <ul className="items">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
