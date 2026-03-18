import { useState, useCallback } from 'react';
import { menuData } from '@/data/menuData';
import MenuHero from '@/components/MenuHero';
import MenuCategoryNav from '@/components/MenuCategoryNav';
import MenuSection from '@/components/MenuSection';

const Index = () => {
  const [activeId, setActiveId] = useState(menuData[0].id);

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <MenuHero />
      <MenuCategoryNav activeId={activeId} onSelect={handleSelect} />
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-14">
        {menuData.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}

        {/* Footer */}
        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            Prices are inclusive of all taxes. Menu items may vary by availability.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
