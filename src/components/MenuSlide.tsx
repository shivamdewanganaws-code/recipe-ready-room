import type { MenuCategory } from '@/data/menuData';

interface MenuSlideProps {
  category: MenuCategory;
  direction: 'left' | 'right';
}

const MenuSlide = ({ category, direction }: MenuSlideProps) => {
  const isHalfFull = category.type === 'half-full';
  const animClass = direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left';

  return (
    <div className={`absolute inset-0 flex flex-col ${animClass}`}>
      {/* Header */}
      <div className="pt-6 pb-3 md:pt-10 md:pb-5 px-6 md:px-12 text-center">
        <span className="text-5xl md:text-7xl block mb-2 animate-scale-in" style={{ animationDelay: '0.15s' }}>
          {category.emoji}
        </span>
        <h1
          className="text-2xl md:text-4xl font-extrabold text-primary-foreground tracking-tight opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {category.title}
        </h1>
        {category.tag && category.tag !== 'both' && (
          <span
            className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-semibold opacity-0 animate-fade-in ${
              category.tag === 'veg'
                ? 'bg-menu-veg/20 text-green-300'
                : 'bg-menu-nonveg/20 text-red-300'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <span className={`w-2 h-2 rounded-full ${category.tag === 'veg' ? 'bg-menu-veg' : 'bg-menu-nonveg'}`} />
            {category.tag === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
          </span>
        )}
      </div>

      {/* Menu items */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Table header */}
          <div className="grid grid-cols-12 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary-foreground/40 border-b border-primary-foreground/10">
            <div className="col-span-6">Item</div>
            {isHalfFull ? (
              <>
                <div className="col-span-3 text-right">Half</div>
                <div className="col-span-3 text-right">Full</div>
              </>
            ) : (
              <div className="col-span-6 text-right">Price</div>
            )}
          </div>

          {/* Items */}
          {category.items.map((item, idx) => (
            <div
              key={item.name}
              className="grid grid-cols-12 px-4 py-2.5 md:py-3 items-center border-b border-primary-foreground/5 opacity-0 animate-fade-in-up hover:bg-primary-foreground/5 transition-colors rounded-lg"
              style={{ animationDelay: `${0.25 + idx * 0.05}s` }}
            >
              <div className="col-span-6 text-sm md:text-base font-medium text-primary-foreground/90">
                {item.name}
              </div>
              {isHalfFull ? (
                <>
                  <div className="col-span-3 text-right text-sm text-primary-foreground/50 font-medium">
                    ₹{item.half}
                  </div>
                  <div className="col-span-3 text-right text-sm font-bold text-accent">
                    ₹{item.full}
                  </div>
                </>
              ) : (
                <div className="col-span-6 text-right text-sm font-bold text-accent">
                  ₹{item.price}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
