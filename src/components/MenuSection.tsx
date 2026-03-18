import type { MenuCategory } from '@/data/menuData';
import VegBadge from './VegBadge';

const MenuSection = ({ category }: { category: MenuCategory }) => {
  const isHalfFull = category.type === 'half-full';

  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">{category.emoji}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          {category.title}
        </h2>
        <VegBadge type={category.tag} />
        <div className="flex-1 h-px bg-border ml-2" />
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-12 px-4 md:px-6 py-3 bg-secondary/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <div className="col-span-6 md:col-span-7">Item</div>
          {isHalfFull ? (
            <>
              <div className="col-span-3 md:col-span-2.5 text-right">Half</div>
              <div className="col-span-3 md:col-span-2.5 text-right">Full</div>
            </>
          ) : (
            <div className="col-span-6 md:col-span-5 text-right">Price</div>
          )}
        </div>

        {/* Items */}
        {category.items.map((item, idx) => (
          <div
            key={item.name}
            className={`grid grid-cols-12 px-4 md:px-6 py-3.5 items-center transition-colors hover:bg-secondary/30 ${
              idx !== category.items.length - 1 ? 'border-b border-border/50' : ''
            }`}
          >
            <div className="col-span-6 md:col-span-7 font-medium text-foreground text-sm md:text-base">
              {item.name}
            </div>
            {isHalfFull ? (
              <>
                <div className="col-span-3 md:col-span-2.5 text-right text-sm font-semibold text-muted-foreground">
                  ₹{item.half}
                </div>
                <div className="col-span-3 md:col-span-2.5 text-right text-sm font-bold text-foreground">
                  ₹{item.full}
                </div>
              </>
            ) : (
              <div className="col-span-6 md:col-span-5 text-right text-sm font-bold text-foreground">
                ₹{item.price}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
