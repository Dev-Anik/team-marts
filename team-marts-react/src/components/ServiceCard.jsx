import { useState } from 'react';
import SourcingModal from './SourcingModal';

const ServiceCard = ({ img, title }) => {

    const [modalData, setModalData] = useState(null);
    const [show, setShow] = useState(false);

    const services = {
        sourcing: {
            heading: "Sourcing",
            details: "We are a professional Garment Buying House providing fabric Sourcing, Washing, Quality Control, and Inspection Services for established Buyers all over the world.",
            images: ["/assets/images/model-5.webp", "/assets/images/model-3.webp", "/assets/images/model-4.webp"]
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

    const handleModalData = (serviceType) => {
        if (!serviceType) return;

        const normalizedType = serviceType.toLowerCase().trim();

        const directMatch = services[normalizedType];
        if (directMatch) {
            setModalData(directMatch);
            setShow(true);
            return;
        }

        const foundKey = Object.keys(services).find((key) => {
            const heading = (services[key].heading || '').toLowerCase();
            return key === normalizedType || heading === normalizedType || heading.includes(normalizedType);
        });

        if (foundKey) {
            setModalData(services[foundKey]);
            setShow(true);
        } else {
            console.warn('Service not found:', serviceType);
        }
    }

    const onCloseModal = () => {
        setShow(false);
    }

    return (
        <>
            <div className="service" onClick={() => handleModalData(title)}>
                <div className="arrow-wrapper box-hover">
                    <div className="arrow green" onClick={() => handleModalData(title)}><i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="img-box">
                    <img src={img} alt="" className="service-img" />
                </div>
                <h3 className="service-name">{title}</h3>
            </div>
            {show && modalData && (
                <SourcingModal
                    show={show}
                    handleClose={onCloseModal}
                    heading={modalData.heading}
                    details={modalData.details}
                    images={modalData.images}
                />
            )}
        </>
    )
}

export default ServiceCard