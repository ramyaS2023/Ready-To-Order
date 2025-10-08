
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/header_img.png";
import Image2 from "../../assets/header_img7.jpg";
import Image3 from "../../assets/header_img6.png";
import "./Header.css";

function HeaderCarousel() {
  return (
    <div className="header-carousel">
      {/* Background carousel */}
      <Carousel controls={true} indicators={false} interval={2000} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
            <div className="header-content">
              <h2>Order Your Favourite Food Here</h2>
              <p>
                Choose from a diverse menu featuring a delectable array of dishes
                crafted with the finest ingredients and culinary expertise.
              </p>
              <button className="btn btn-danger">View Menu</button>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Second slide" />
            <div className="header-content">
              <h2>Order Your Favourite Food Here</h2>
              <p>
                Choose from a diverse menu featuring a delectable array of dishes
                crafted with the finest ingredients and culinary expertise.
              </p>
              <button className="btn btn-danger">View Menu</button>
            </div>

        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image3} alt="Third slide" />
            <div className="header-content">
              <h2>Order Your Favourite Food Here</h2>
              <p>
                Choose from a diverse menu featuring a delectable array of dishes
                crafted with the finest ingredients and culinary expertise.
              </p>
              <button className="btn btn-danger">View Menu</button>
            </div>
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
}

export default HeaderCarousel;
