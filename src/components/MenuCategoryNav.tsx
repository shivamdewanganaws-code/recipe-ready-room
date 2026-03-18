import { menuData } from '@/data/menuData';

interface MenuCategoryNavProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const MenuCategoryNav = ({ activeId, onSelect }: MenuCategoryNavProps) => {
  return (
    <nav className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border py-3">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0 ${
                activeId === cat.id
                  ? 'menu-gradient text-primary-foreground shadow-md scale-105'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MenuCategoryNav;
