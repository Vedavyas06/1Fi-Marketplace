import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ProductDetails = ({ product, onBack }) => {
  const [selectedEmi, setSelectedEmi] = useState(null);

  return (
    <div>
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} style={{ marginRight: '6px' }} /> Back to Marketplace
      </button>

      <div className="details-container">
        <img src={product.image} alt={product.name} className="details-image" />
        <h2 className="details-title">{product.name}</h2>
        <p className="details-desc">{product.description}</p>
        <div className="details-price">₹{product.basePrice.toLocaleString()}</div>
      </div>

      <h3 className="emi-header">Available EMI Plans</h3>
      {product.emiOptions.map((emi, index) => (
        <div 
          key={index} 
          onClick={() => setSelectedEmi(index)}
          className={`emi-card ${selectedEmi === index ? 'selected' : ''}`}
        >
          <div>
            <div className="emi-duration">{emi.durationMonths} Months</div>
            <div className="emi-interest">
              {emi.interestRate === 0 ? 'No-cost EMI' : `${emi.interestRate}% Interest`}
            </div>
          </div>
          <div className="emi-installment">
            ₹{emi.monthlyInstallment.toLocaleString()}/month
          </div>
        </div>
      ))}

      <button 
        className="proceed-button"
        disabled={selectedEmi === null}
      >
        Proceed with Selected Plan
      </button>
    </div>
  );
};

export default ProductDetails;