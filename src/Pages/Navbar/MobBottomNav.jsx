import React, { useState } from 'react';
import { Home, Sparkles, Grid, Heart, ShoppingBag } from 'lucide-react';

const MobileNavBar = () => {
  const [activeItem, setActiveItem] = useState('HOME');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 md:hidden">
      <ul className="flex justify-around items-center">
        <NavItem icon={<Home size={24} />} label="HOME" activeItem={activeItem} setActiveItem={setActiveItem} />
        <NavItem icon={<Sparkles size={24} />} label="NEW" activeItem={activeItem} setActiveItem={setActiveItem} />
        <NavItem icon={<Grid size={24} />} label="SHOP" activeItem={activeItem} setActiveItem={setActiveItem} />
        <NavItem icon={<Heart size={24} />} label="WISHLIST" activeItem={activeItem} setActiveItem={setActiveItem} />
        <NavItem icon={<ShoppingBag size={24} />} label="BAG" badge={1} activeItem={activeItem} setActiveItem={setActiveItem} />
      </ul>
    </nav>
  );
};

const NavItem = ({ icon, label, badge, activeItem, setActiveItem }) => {
  const isActive = activeItem === label;

  return (
    <li className="flex flex-col items-center">
      <button 
        className={`relative p-1 ${isActive ? 'text-black' : 'text-gray-500'}`}
        onClick={() => setActiveItem(label)}
      >
        {React.cloneElement(icon, { 
          strokeWidth: isActive ? 3 : 2 
        })}
        {badge && (
          <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </button>
      <span className={`text-xs mt-1 ${isActive ? 'font-bold' : ''}`}>{label}</span>
    </li>
  );
};

export default MobileNavBar;