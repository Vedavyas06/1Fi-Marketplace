import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ activeTab, searchQuery, setSearchQuery }) => {
  let placeholderText = "Search online stores...";
  
  if (activeTab === 'topBrands') placeholderText = "Search top brands...";
  if (activeTab === 'nearbyStores') placeholderText = "Search nearby stores...";
  if (activeTab === 'marketplace') placeholderText = "Search marketplace products...";

  return (
    <div className="search-container">
      <Search size={18} color="#848484" />
      <input 
        type="text" 
        className="search-input"
        placeholder={placeholderText}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;