import React from "react";
import "./styles.css";

interface CarouselProps {
    items: { id: string; imageUrl: string; redirectUrl: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    console.log(items)
    return (
        <div className="carousel-container">
            {items.map(item => (
                <div key={item.id} className="carousel-slide" onClick={() => window.location.href = item.redirectUrl}>
                    <img src={item.imageUrl} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
