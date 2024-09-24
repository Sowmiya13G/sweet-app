import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../products-type/productTypes'; 
import './styles.css'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <h2 className="product-title">{product.productName}</h2>
      <img src={product.imageUrl} alt={product.productName} className="product-image" />
      {/* <Link className="product-link" to={`/products/${product.id}`}>View Details</Link> */}
    </div>
  );
};

export default ProductCard;
