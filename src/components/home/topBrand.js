import { Col, Row } from "antd";
import { Button } from "antd";
import { Card } from "antd";
const products = [
  {
    key: "1",
    image: "../../assets/images/img9.jpg",
  },
  {
    key: "2",
    image: "../../assets/images/img10.jpg",
  },
  {
    key: "3",
    image: "../../assets/images/img11.jpg",
  },
  {
    key: "4",
    image: "../../assets/images/img9.jpg",
  },
];
function TopBrand() {
  const recentProducts = products.map((el) => (
    <Col span={6} key={el.key}>
      <Card>
        <div className="content">
          <div className="image">
            <img src={el.image} alt="" />
          </div>
        </div>
      </Card>
    </Col>
  ));
  return (
    <div className="block products">
      <h2>Sale Products</h2>
      <Row gutter={12}>{recentProducts}</Row>
    </div>
  );
}

export default TopBrand;
