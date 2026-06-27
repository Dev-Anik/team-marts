import React from 'react'

const WhyUs = () => {
  return (
        <section className="why-us">
      <div className="row">
        <div className="col-md-5 why-us-left">
          <h2 className="why-us-heading">Why choose Us</h2>
          <p className="why-us-text">TEAM MARTS LIMITED is a reputable garments buying house in Dhaka, Bangladesh. We are
            passionate about delivering real value to our global fashion industry clients. We specialize in product
            sourcing, innovative designs, efficient production with on-time delivery, top-quality assurance, and supply
            chain solutions, all aimed at fostering strong business partnerships.</p>
          <p className="why-us-text">We partner with top-rated, compliance-certified factories in Bangladesh for woven,
            jersey, and knitwear. TEAM MARTS LIMITED ensures high production standards with global, sustainable
            suppliers. Our competitive pricing, short lead times, and flexible volumes, combined with a skilled team in
            fabric sourcing and garment technology, deliver exceptional value.</p>
          <div className="hero-left-box">
            <div className="arrow-wrapper">
              <div className="arrow"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></div>
            </div>
            <h4 className="hlbt">Learn More</h4>
          </div>
        </div>
        <div className="col-md-7 why-us-right">
          <div className="d-flex">
            <div className="why-us-grid-1">
              <div className="gif-content">
                <div className="gif-wrapper">
                  <img src="assets/images/gif-1.gif" alt="" className="gif"/>
                  <h2 className="why-us-heading nav-bg-text">Strong Team <br/>setup</h2>
                </div>
              </div>
              <div className="gif-content green-bg">
                <div className="gif-wrapper">
                  <img src="assets/images/gif-2.gif" alt="" className="gif"/>
                  <h2 className="why-us-heading">Commited</h2>
                </div>
              </div>
            </div>
            <div className="why-us-grid-2">
              <div className="gif-content black-bg">
                <div className="gif-wrapper">
                  <img src="assets/images/gif-3.gif" alt="" className="gif"/>
                  <h2 className="why-us-heading">Quality <br/>Focused</h2>
                </div>
              </div>
              <div className="gif-content black-bg mob-border-left">
                <div className="gif-wrapper">
                  <img src="assets/images/gif-4.gif" alt="" className="gif"/>
                  <h2 className="why-us-heading">Innovative</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs