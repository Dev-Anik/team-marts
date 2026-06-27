import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SourcingModal from './SourcingModal';
const HomeHero = () => {
    const [modalData, setModalData] = useState({});
    let [show, setShow] = useState(false);
    const images = [
        'assets/images/home-hero-2.webp',
        'assets/images/home-hero-3.webp',
        'assets/images/home-hero.webp'
    ];
    const [activeLayer, setActiveLayer] = useState(2);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveLayer((prevLayer) => (prevLayer === 1 ? 2 : 1));
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => window.clearInterval(intervalId);
    }, [images.length]);

    const overlay = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
    const layerOneStyle = {
        backgroundImage: `${overlay}, url('${images[currentImageIndex]}')`,
        opacity: activeLayer === 1 ? 1 : 0,
    };
    const layerTwoStyle = {
        backgroundImage: `${overlay}, url('${images[currentImageIndex]}')`,
        opacity: activeLayer === 2 ? 1 : 0,
    };
    // Modal data
    const services = {
        sourcing: {
            heading: "Sourcing",
            details: "We are a professional Garment Buying House providing fabric Sourcing, Washing, Quality Control, and Inspection Services for established Buyers all over the world.",
            images: ["assets/images/model-5.webp", "assets/images/model-3.webp", "assets/images/model-4.webp"]
        },
        purpose: {
            heading: "Our Purpose",
            details: "We see ourselves as the extended arm, ear and eye of our customer. We deliver our best efforts so that all business purpose and practices are aligned to create a positive impact for your worldwide supply chain, the surrounding environment, and for you.",
            images: []
        },
        sustainability: {
            heading: "Sustainability",
            details: "TEAM MARTS LIMITED is passionate about using technology to create sustainable fabrics. We are invested in solutions, partners and suppliers that create new products from materials that can be reused, recycled and reborn into a new product. We can help your company reach your sustainability goals and work together to protect our living planet.",
            images: []
        },
        quality: {
            heading: "Quality Assurance",
            details: "With our experienced and skilled on-site Quality Control teams, we can provide our partners with the transparency and controls needed to measure the quality of each order.",
            images: []
        },
        sampling: {
            heading: "Sampling",
            details: "We have faster sample making support in factory based on customer requirement. Our merchandising team and quality controllers always keep close monitoring on samples as per buyer expectations.",
            images: []
        },
        production: {
            heading: "Production",
            details: "We have experienced technical experts on-site who monitor and control the quality at our factories.",
            images: []
        }
    }
    const handleModal = (serviceType) => {
        setModalData(services[serviceType]);
        openModal();
    }

    const openModal = () => {
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }
    return (
        <section className="hero" id="home-hero">
            <div className="bg-img" id="bg-img-1" style={layerOneStyle}></div>
            <div className="bg-img" id="bg-img-2" style={layerTwoStyle}></div>
            <div className="hero-wrapper container">
                <div className="row">
                    {/* <!-- Left Side --> */}
                    <div className="hero-left col-md-8 col-12">
                        <h2 className="hlh green">Indigo Never Dies</h2>
                        <p className="hlt">Committed to providing excellence over years.</p>
                        <Link to="/products">
                            <div className="hero-left-box">
                                <div className="arrow-wrapper">
                                    <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
                                </div>
                                <h4 className="hlbt">Our <br /> Products</h4>
                            </div>
                        </Link>
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="hero-right col-md-4 col-12">
                        <div className="hero-right-grid">
                            <div className="hr-top-grid">
                                <h3 className="hrgh">Since 2022</h3>
                                <h5 className="hrgt">Believe in Sustainability </h5>
                            </div>
                            <div className="hr-common-grid border-right" onClick={()=>handleModal('sourcing')}>
                                <h2 className="gn">01</h2>
                                <p className="gd">Sourcing</p>
                            </div>
                            {/* Modal open section starts here */}
                            <div className="hr-common-grid" onClick={()=>handleModal('purpose')}>
                                <h2 className="gn">02</h2>
                                <p className="gd">Our Purpose</p>
                            </div>
                            <div className="hr-common-grid border-right" onClick={()=>handleModal('sustainability')}>
                                <h2 className="gn">03</h2>
                                <p className="gd">Sustainability</p>
                            </div>
                            <div className="hr-common-grid" onClick={()=>handleModal('quality')}>
                                <h2 className="gn">04</h2>
                                <p className="gd">Quality <br /> Assurance
                                </p>
                            </div>
                            <div className="hr-common-grid border-right" onClick={()=>handleModal('sampling')}>
                                <h2 className="gn">05</h2>
                                <p className="gd">Sampling
                                </p>
                            </div>
                            <div className="hr-common-grid" onClick={()=>handleModal('production')}>
                                <h2 className="gn">06</h2>
                                <p className="gd">Production
                                </p>
                            </div>
                            {/* Modal opening section ends here */}
                        </div>
                    </div>
                </div>
            </div>
            <SourcingModal
                 show={show} 
                 handleClose={closeModal} 
                 heading={modalData.heading}
                 details={modalData.details}
                 images={modalData.images}
            />
        </section>
    )
}

export default HomeHero