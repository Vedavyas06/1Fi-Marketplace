import React from 'react';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'topBrands', label: 'Top Brands' },
    { id: 'nearbyStores', label: 'Nearby Stores' },
    { id: 'marketplace', label: '1Fi Marketplace' }
  ];

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && <div className="tab-indicator" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;