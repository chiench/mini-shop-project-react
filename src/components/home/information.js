import { Col, Row } from "antd";
const bgImg1 = "../../assets/images/ad-img1.png";
const bgImg2 = "../../assets/images/ad-img2.png";

function Information() {
  return (
    <div className="informationBlock">
      <Row gutter={24}>
        <Col span={12}>
          <div
            className="holder"
            style={{
              backgroundImage: `url(${bgImg1})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3>Everyday essentials from</h3>
            <div className="price">60p</div>
          </div>
        </Col>
        <Col span={12}>
          <div
            className="holder"
            style={{
              backgroundImage: `url(${bgImg2})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3>Same day delivery</h3>
            <p>Free when you spend over £20</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Information;
