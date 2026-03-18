const VegBadge = ({ type }: { type?: 'veg' | 'nonveg' | 'both' }) => {
  if (!type || type === 'both') return null;
  return (
    <span
      className={`inline-block w-4 h-4 rounded-sm border-2 ${
        type === 'veg' ? 'border-menu-veg' : 'border-menu-nonveg'
      } flex items-center justify-center`}
    >
      <span
        className={`block w-2 h-2 rounded-full ${
          type === 'veg' ? 'bg-menu-veg' : 'bg-menu-nonveg'
        }`}
      />
    </span>
  );
};

export default VegBadge;
