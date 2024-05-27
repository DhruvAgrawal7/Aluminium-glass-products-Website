import { useLocation } from "react-router-dom";
import './detail.css'
import Header from "../header/header";
import Footer from "../footer/footer";
import { useEffect } from "react";
const Details = () => {

    const location = useLocation();
    const { images } = location.state;
    console.log(images);

    useEffect(() => {
        // Redirect to the first page when the component mounts
        window.history.replaceState(null, 'null', '/');
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="detail">
            <Header />
            <h2 className="mx-auto title detail-title">{images.title}</h2>
            <div className="detail-div">
                <img src={images.src} alt={images.title} className="detail-img" />
                <p className="detail-des">{images.long_des}</p>
            </div>
            <div className="work-detail-Parentdiv">
                <h2 className="mx-auto title">Our {images.title}</h2>
                <div className="work-detail-div">
                    <img src={images.img1} alt="" className="work-detail-img" />
                    <img src={images.img2} alt="" className="work-detail-img" />
                    <img src={images.img3} alt="" className="work-detail-img" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Details;