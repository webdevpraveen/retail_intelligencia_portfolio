import './SectionHeader.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, description, id, centered = false }: SectionHeaderProps) {
  return (
    <div className={`section-header ${centered ? 'section-header--center' : ''}`}>
      <p className="eyebrow section-header__eyebrow">{eyebrow}</p>
      <h2 className="section-header__title" id={id}>{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </div>
  );
}
