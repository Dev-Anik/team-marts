import React from 'react'

const ProductCards = ({selectedType}) => {
    return (
        <section className="products">
            <h1>Selected type is {selectedType}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="service" data-bs-toggle="modal" data-bs-target="#productModal">
                            <div className="arrow-wrapper box-hover">
                                <div className="arrow green"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></div>
                            </div>
                            <div className="img-box">
                                <img src="assets/images/mans/Mens-1(F).webp" alt="" className="service-img"/>
                            </div>
                            <h3 className="product-code">MENS001</h3>
                            <p className="product-info fade-out">Slim Fit</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCards