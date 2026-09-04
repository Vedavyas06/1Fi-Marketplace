import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="hero-header">
      <div className="hero-badge">
        <Sparkles size={14} style={{ marginRight: '6px' }} /> NO-COST EMIs
      </div>
      <h1 className="hero-title">
        Shop today,<br />Pay later using<br />Mutual funds.
      </h1>
      <p className="hero-subtitle">
        No credit score required. No interest.<br />
        Backed by your investments.
      </p>
    </div>
  );
};

export default Header;