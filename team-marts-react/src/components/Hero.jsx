const Hero = ({ title, heading1, heading2 }) => {
    return (
        <section className="hero" id="aboutus-hero">
            <div className="hero-wrapper container">
                <div className="row hero-content">
                    <div className="col">
                        <h6 className="hero-name">{title}</h6>
                        <h2 className="hlh-thin">{heading1}</h2>
                        <h2 className="hlh">{heading2}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero