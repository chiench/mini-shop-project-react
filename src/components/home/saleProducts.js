import { Col, Row } from "antd";
import { Button } from "antd";
import { Card } from "antd";
const products = [
  {
    key: "1",
    image: "../../assets/images/img5.jpg",
    title: "Glens Vodka 70cl Extra smooth",
    saleprice: "£20.00",
    price: "£15.50",
  },
  {
    key: "2",
    image: "../../assets/images/img6.jpg",
    title: "Pot Noodle Chicken & Mushroom Standard 90g",
    saleprice: "£1.50",
    price: "£0.90",
  },
  {
    key: "3",
    image: "../../assets/images/img7.jpg",
    title: "Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g",
    saleprice: "£2.00",
    price: "£1.50",
  },
  {
    key: "4",
    image: "../../assets/images/img8.jpg",
    title: "Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g",
    saleprice: "£3.00",
    price: "£2.50",
  },
];
function SaleProduct() {
  const recentProducts = products.map((el) => (
    <Col span={6} key={el.key}>
      <Card>
        <div className="content">
          <div className="image">
            <img src={el.image} alt="" />
          </div>
          <h3>{el.title}</h3>
          <div className="price">
            <span className="salePrice"> {el.saleprice}</span> {el.price}
          </div>
          <Button type="primary">Add to Basket</Button>
        </div>
      </Card>
    </Col>
  ));
  return (
    <div className="heroBlock block products">
      <h2>Sale Products</h2>
      <Row gutter={12}>{recentProducts}</Row>
    </div>
  );
}

export default SaleProduct;
