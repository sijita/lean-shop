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
    <div className="space-y-4">
      <h3 className="text-white font-semibold">{title}</h3>
      {subtitle && (
        <div className="space-y-2">
          <p className="text-sm text-[#77878F]">{subtitle}</p>
          <p className="text-lg text-white">{text1}</p>
          <div>
            <p className="text-sm text-[#ADB7BC]">{text2}</p>
            <p className="text-sm text-[#ADB7BC]">{text3}</p>
          </div>
          <p className="text-sm text-white">{text4}</p>
        </div>
      )}
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-sm hover:text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
