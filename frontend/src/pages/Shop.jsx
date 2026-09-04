import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavigationTabs from '../components/NavigationTabs';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import ProductDetails from '../components/ProductDetails';

const Shop = () => {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // New search state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      
      {selectedProduct ? (
        <div className="content-area">
           <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        </div>
      ) : (
        <>
          <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="content-area">
            
            {/* Pass state and activeTab to SearchBar */}
            <SearchBar 
              activeTab={activeTab} 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            
            {activeTab === 'topBrands' && <h3 className="section-title">Top Brands</h3>}
            {activeTab === 'nearbyStores' && <h3 className="section-title">Nearby Stores</h3>}
            
            {activeTab === 'marketplace' && (
              <div>
                <h3 className="section-title">1Fi Marketplace</h3>
                {loading ? (
                  <p>Loading products...</p>
                ) : filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard 
                      key={product._id} 
                      product={product} 
                      onClick={() => setSelectedProduct(product)} 
                    />
                  ))
                ) : (
                  <p style={{ color: 'var(--1fi-text-muted)', textAlign: 'center', marginTop: '20px' }}>
                    No products found matching "{searchQuery}"
                  </p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;