import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "../../redux/store/store";
import "./styles.css";
import { fetchProducts } from "../../redux/features/productSlice";
import ProductCard from "../../components/sweetCard";
import { fetchCarouselItems } from "../../redux/features/carouselSlice";
import Carousel from "../../components/carousel";
import { Product } from "../../products-type/productTypes";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    items: productItems,
    status: productStatus,
    error: productError,
  } = useSelector((state: RootState) => state.products);
  const {
    items: carouselItems,
    status: carouselStatus,
    error: carouselError,
  } = useSelector((state: RootState) => state.carousel);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCarouselItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home-container">
      {carouselStatus === "loading" && <p>Loading carousel...</p>}
      {carouselStatus === "failed" && <p>Error: {carouselError}</p>}

      {carouselStatus === "succeeded" && (
        <div className="carousel-list">
          <Carousel items={carouselItems} />
        </div>
      )}

      {/* Product list rendering */}
      {productStatus === "loading" && <p>Loading products...</p>}
      {productStatus === "failed" && <p>Error: {productError}</p>}

      {productStatus === "succeeded" && (
        <div className="products-list">
          {productItems.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}

      <footer className="home-footer">
        <ul className="footer-list">
          <li>
            <Link className="footer-item" to="/sweets">
              Sweets
            </Link>
          </li>
          <li>
            <Link className="footer-item" to="/savouries">
              Savouries
            </Link>
          </li>
          <li>
            <Link className="footer-item" to="/bakery">
              Bakery
            </Link>
          </li>
          <li>
            <Link className="footer-item" to="/branches">
              Branches
            </Link>
          </li>
          <li>
            <Link className="footer-item" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link className="footer-item" to="/contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
