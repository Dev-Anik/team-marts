import React from 'react'
import ProductOption from './ProductOption'
import { useState } from 'react';

const ProductsHero = () => {
    const productOption = [
        {
            type: "Mens"
        },
        {
            type: "Ladies"
        },
        {
            type: "Kids"
        },
        {
            type: "Knitwears"
        }
    ]

    const [activeType, setActiveType] = useState(productOption[0].type);

    const handleActive = (type) => {
        setActiveType(type);
    }

    return (
        <section className="hero" id="products-hero">
            <div className="hero-wrapper container">
                <div className="row hero-content">
                    <div className="col">
                        <h6 className="hero-name">Products</h6>
                        <h2 className="hlh-thin">OUR SPECIALIZED</h2>
                        <h2 className="hlh">DENIM APPARELS</h2>
                    </div>
                </div>
            </div>
            <div className="row product-option">
                {
                    productOption.map((product, index) => (
                        <ProductOption
                            key={product.type}
                            index={index + 1}
                            type={product.type}
                            active={activeType === product.type}
                            onClick={() => handleActive(product.type)}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ProductsHero