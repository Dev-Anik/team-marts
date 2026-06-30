import React from 'react'
import { useState } from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
    const aboutServices = [
        { title: 'Sourcing', imgUrl: 'assets/images/service-1.svg' },
        { title: 'Our Purpose', imgUrl: 'assets/images/purpose-service.svg' },
        { title: 'Sustainability', imgUrl: 'assets/images/sustainable.svg' },
        { title: 'Quality Assurance', imgUrl: 'assets/images/quality-service.svg' },
        { title: 'Sampling', imgUrl: 'assets/images/sample-service.svg' },
        { title: 'Production', imgUrl: 'assets/images/production-service.svg' }
    ]

    return (
        <section className="our-service">
            <div className="service-wrapper container">
                <h2 className="sec-head green text-center mb-4rem">Our Services</h2>
                <div className="row">
                    <div className="col-md-6 left-services">
                        {
                            aboutServices.map((service, index) =>
                                (index < 3) ? <ServiceCard key={index} img={service.imgUrl} title={service.title}></ServiceCard> : ''
                            )
                        }
                    </div>

                    <div className="col-md-6 right-services">
                        {
                            aboutServices.map((service, index) =>
                                (index > 2) ? <ServiceCard key={index} img={service.imgUrl} title={service.title}></ServiceCard> : ''
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service