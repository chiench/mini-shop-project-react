import { Col, Row } from "antd";
import { Button } from "antd";
import { Card } from "antd";
const products = [
  {
    key: "1",
    image: "../../assets/images/img1.jpg",
    title:
      "Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml",
    price: "£2.00",
  },
  {
    key: "2",
    image: "../../assets/images/img2.jpg",
    title: "Colgate Triple Action Toothpaste 100ml",
    price: "£1.50",
  },
  {
    key: "3",
    image: "../../assets/images/img3.jpg",
    title: "Breeze Toilet Tissue Soft White 24 Roll",
    price: "£5.70",
  },
  {
    key: "4",
    image: "../../assets/images/img4.jpg",
    title: "Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML",
    price: "£4.50",
  },
];
function RecentProduct() {
  const recentProducts = products.map((el) => (
    <Col span={6} key={el.key}>
      <Card>
        <div className="content">
          <div className="image">
            <img src={el.image} alt="" />
          </div>
          <h3>{el.title}</h3>
          <div className="price">{el.price}</div>
          <Button type="primary">Add to Basket</Button>
        </div>
      </Card>
    </Col>
  ));
  return (
    <div className="block products">
      <h2>Recent Products</h2>
      <Row gutter={12}>{recentProducts}</Row>
    </div>
  );
}

export default RecentProduct;
