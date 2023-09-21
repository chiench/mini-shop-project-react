import { Col, Row } from "antd";
import { Carousel } from "antd";

function Hero() {
  return (
    <div className="heroBlock">
      <Row gutter={24}>
        {/* carousel */}
        <Col span={18}>
          <Carousel autoplay>
            <div>
              <img src="../../assets/images/banner-img1.jpg" alt="banner1" />
            </div>
            <div>
              <img src="../../assets/images/banner-img2.jpg" alt="banner2" />
            </div>
            <div>
              <img src="../../assets/images/banner-img3.jpg" alt="banner3" />
            </div>
          </Carousel>
        </Col>
        {/* informationBlock */}
        <Col span={6}>
          <div className="heroBlocks">
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className="content">
                <h3>Free Shipping & Return</h3>
                <p>Free shipping on orders over £20</p>
              </div>
            </div>
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="content">
                <h3>Money Back Guarantee</h3>
                <p>100% money back guarantee</p>
              </div>
            </div>
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="content">
                <h3>Online Support 24/7</h3>
                <p>Excepteur sint occaecat cupidatat</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
