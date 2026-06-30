import React from 'react'

const Vision = () => {
    return (
        <section className="vision-mission">
            <div className="vm-img">
                <img src="assets/images/vision.jpg" alt=""/>
            </div>
            <div className="row">
                <div className="d-flex flex-column justify-content-center col-md-6 vision-wrapper">
                    <h2 className="hlh-thin">Vision</h2>
                    <p>To become the most reliable sourcing organization that provide excellent quality product to the
                        clients and bring new innovation in products and business method which add value to our
                        customer.</p>
                </div>
                <div className="d-flex flex-column justify-content-center col-md-6 mission-wrapper">
                    <h2 className="hlh-thin">Mission</h2>
                    <p>To setup an ethical business standard by providing best services, quality & commitment.
                        Implementing eco-friendly technologies to all associated factories through trained and
                        knowledgeable workforce to offer highest label of customer satisfaction. </p>
                </div>
            </div>
        </section>
    )
}

export default Vision