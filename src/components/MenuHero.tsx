import { UtensilsCrossed } from 'lucide-react';

const MenuHero = () => {
  return (
    <div className="menu-gradient py-16 md:py-24 px-4 text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <UtensilsCrossed className="w-4 h-4 text-primary-foreground" />
          <span className="text-primary-foreground/90 text-sm font-medium tracking-wide uppercase">
            Our Menu
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Delicious Food,<br />
          <span className="text-menu-gold">Unforgettable Taste</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-md mx-auto">
          Explore our carefully crafted menu with authentic flavours from across India and beyond.
        </p>
      </div>
    </div>
  );
};

export default MenuHero;
