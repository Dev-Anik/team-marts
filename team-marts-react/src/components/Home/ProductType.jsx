import React, { useRef } from 'react'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const ProductType = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const products = [
        {
            title: 'Mens',
            image: '/assets/images/model-5.webp'
        },
        {
            title: 'Ladies',
            image: '/assets/images/model-3.webp'
        },
        {
            title: 'Kids',
            image: '/assets/images/model-4.webp'
        },
        {
            title: 'Knitwears',
            image: '/assets/images/model-6.webp'
        }

    ]
    return (
        <section id="products" className="products">
            <div className="container">
                <div className="row product-category">
                    <div className="col-md-4 cat-left">
                        <div className="sec-head-content mob-only">
                            <h2 className="sec-head green text-left">Products</h2>
                            <p className="sec-head-p">Choose the most suitable products category for you.</p>
                        </div>
                        <div className="cat-slide-div">
                            <h3 className="cat-h3">Category of products</h3>
                        </div>
                        <div className="ripple-group">
                            <div className="ripple-wrapper prev-btn" ref={prevRef}>
                                <div className="ripple"><i className="fa-solid fa-chevron-left"></i></div>
                            </div>
                            <div className="ripple-wrapper next-btn" ref={nextRef}>
                                <div className="ripple"><i className="fa-solid fa-chevron-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="sec-head-content tab-only">
                            <h2 className="sec-head green text-left">Products</h2>
                            <p className="sec-head-p">Choose the most suitable products category for you.</p>
                        </div>
                        <Swiper
                            className="owl-carousel owl-theme"
                            modules={[Navigation]}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                            onBeforeInit={(swiper) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current
                                    swiper.params.navigation.nextEl = nextRef.current
                                }
                            }}
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            centeredSlides={false}
                        >
                            {
                                products.map((product, index) => (
                                    <SwiperSlide key={product.title}>
                                        <Product imgUrl={product.image} index={index + 1} gender={product.title} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductType