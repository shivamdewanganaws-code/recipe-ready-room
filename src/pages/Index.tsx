import { useState, useCallback, useEffect, useRef } from 'react';
import { menuData } from '@/data/menuData';
import MenuSlide from '@/components/MenuSlide';
import SlideIndicator from '@/components/SlideIndicator';
import MusicToggle from '@/components/MusicToggle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = menuData.length;

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 550);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    if (current < total - 1) goTo(current + 1, 'right');
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1, 'left');
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) next();
      else prev();
    }
  };

  // Background gradient per category
  const bgGradients = [
    'from-green-900/30 to-emerald-900/20',
    'from-red-900/30 to-orange-900/20',
    'from-amber-900/30 to-yellow-900/20',
    'from-orange-900/30 to-red-900/20',
    'from-rose-900/30 to-red-900/20',
    'from-teal-900/30 to-cyan-900/20',
    'from-cyan-900/30 to-blue-900/20',
    'from-pink-900/30 to-rose-900/20',
    'from-yellow-900/30 to-amber-900/20',
    'from-violet-900/30 to-purple-900/20',
    'from-amber-900/30 to-orange-900/20',
    'from-stone-900/30 to-amber-900/20',
    'from-sky-900/30 to-blue-900/20',
    'from-fuchsia-900/30 to-pink-900/20',
    'from-yellow-900/30 to-amber-900/20',
  ];

  return (
    <div
      className="h-screen w-screen overflow-hidden relative select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgGradients[current % bgGradients.length]} transition-all duration-700 ease-out`}
        style={{ backgroundColor: 'hsl(var(--menu-dark))' }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-accent/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Music toggle */}
      <MusicToggle />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        disabled={current === 0 || isAnimating}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 text-primary-foreground disabled:opacity-20 hover:bg-card/40 transition-all"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        disabled={current === total - 1 || isAnimating}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 text-primary-foreground disabled:opacity-20 hover:bg-card/40 transition-all"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide content */}
      <div className="relative h-full w-full z-10">
        <MenuSlide
          key={`${current}-${direction}`}
          category={menuData[current]}
          direction={direction}
        />
      </div>

      {/* Bottom indicator */}
      <SlideIndicator
        total={total}
        current={current}
        categories={menuData}
        onSelect={(i) => goTo(i, i > current ? 'right' : 'left')}
      />
    </div>
  );
};

export default Index;
