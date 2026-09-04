import React from 'react';
import { Home, ShoppingBag, CreditCard, PieChart, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop', icon: ShoppingBag, active: true },
    { id: 'dues', label: 'EMI Dues', icon: CreditCard },
    { id: 'limit', label: 'Limit', icon: PieChart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className={`nav-item ${item.active ? 'active' : ''}`}>
            <Icon size={22} strokeWidth={item.active ? 2.5 : 2} />
            <span className="nav-label">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;