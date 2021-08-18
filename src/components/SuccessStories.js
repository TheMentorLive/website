import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SuccessStories = () => {
  const settings = {
    data: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots:true
  };

  return (
    <Container fluid className="section7">
      <Row md={2}>
        <Col className="slider-col">
          <div className="section7-text-left">
            <span className="section7-subHead">Success Stories</span>
            <h2 className="section7-heading">
              <span className="sec-per">96%</span> of mentor users have become
              famous experts{" "}
            </h2>
            <p className="section7-desc">
              This is the course process you will go through if you blah
              subscribe your our platform.
            </p>
          </div>
        </Col>
        <Col className="slider-col">
          <Slider {...settings} className="carousel-slider">
            <div className="carousel-data">
                <img src="/images/stories1.png" alt="story 1"/>
            </div>
            <div className="carousel-data">
                <img src="/images/stories1.png" alt="story 1"/>
            </div>
            <div className="carousel-data">
                <img src="/images/stories1.png" alt="story 1"/>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessStories;
