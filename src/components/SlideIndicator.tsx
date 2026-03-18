import type { MenuCategory } from '@/data/menuData';

interface SlideIndicatorProps {
  total: number;
  current: number;
  categories: MenuCategory[];
  onSelect: (index: number) => void;
}

const SlideIndicator = ({ total, current, categories, onSelect }: SlideIndicatorProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-menu-dark/90 to-transparent pt-8 pb-4 px-4">
      {/* Category name */}
      <p className="text-center text-primary-foreground/50 text-xs font-medium mb-3 tracking-wider uppercase">
        {current + 1} / {total} — {categories[current].title}
      </p>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 flex-wrap max-w-md mx-auto">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2 bg-accent'
                : 'w-2 h-2 bg-primary-foreground/25 hover:bg-primary-foreground/50'
            }`}
            title={categories[i].title}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideIndicator;
