import type { Category } from '../types/Category';

type CategoryCardProps = {
  category: Category;
};

const paletteMap: Record<number, string> = {
  1: 'bg-[#FCE7EA] text-[#D56989]',
  2: 'bg-[#EBF5D8] text-[#4F6D3D]',
  3: 'bg-[#F9E7EA] text-[#D56989]',
  4: 'bg-[#EAF4D6] text-[#4F6D3D]',
  5: 'bg-[#F3EEF1] text-[#4B5563]',
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <article
      aria-label={category.name}
      className={`flex min-h-[104px] flex-col items-center justify-center rounded-[22px] p-3 ${
        paletteMap[category.id] ?? 'bg-[#F3EEF1] text-[#4B5563]'
      }`}
    >
      <div
        className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-xl shadow-[0_6px_12px_rgba(17,24,39,0.04)]"
        aria-hidden="true"
      >
        {category.icon}
      </div>
      <div className="text-[12px] font-semibold text-[#1F2937]">{category.name}</div>
    </article>
  );
};

export default CategoryCard;
