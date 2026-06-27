import { Link } from "react-router-dom"
const Product = ({imgUrl,index,gender}) => {
    return (
        <div className="item">
            <div className="item-content"><img src={imgUrl} alt="Owl Image" className="owl-img" />
                <div className="img-overlay">
                    <div className="img-arrow">
                        <Link to="/products"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="text-overlay">
                    <i className="fa-solid fa-arrow-right text-i" aria-hidden="true"></i>
                    <h2 className="overlay-no">{index}</h2>
                </div>
            </div>
            <h3 className="carousel-item-name">{gender}</h3>
        </div>
    )
}

export default Product