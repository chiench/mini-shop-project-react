import { Col, Row } from "antd";
const productCategories = [
  {
    key: "1",
    image: "../../assets/images/img15.jpg",
    title: "Frozen",
  },
  {
    key: "2",
    image: "../../assets/images/img16.jpg",
    title: "Fresh",
  },
  {
    key: "3",
    image: "../../assets/images/img17.jpg",
    title: "Food Cupboard",
  },
  {
    key: "4",
    image: "../../assets/images/img18.jpg",
    title: "Household",
  },
  {
    key: "5",
    image: "../../assets/images/img19.jpg",
    title: "Drinks",
  },
  {
    key: "6",
    image: "../../assets/images/img20.jpg",
    title: "Bakery",
  },
  {
    key: "7",
    image: "../../assets/images/img21.jpg",
    title: "Fresh Fruits",
  },
  {
    key: "8",
    image: "../../assets/images/img22.jpg",
    title: "Hot Buys",
  },
  {
    key: "9",
    image: "../../assets/images/img23.jpg",
    title: "Offers",
  },
  {
    key: "10",
    image: "../../assets/images/img24.jpg",
    title: "Luxury",
  },
  {
    key: "11",
    image: "../../assets/images/img25.jpg",
    title: "Beers & Wines",
  },
  {
    key: "12",
    image: "../../assets/images/img26.jpg",
    title: "Christmas",
  },
];

function ProductCategories() {
  const listProductCategories = productCategories.map((el) => (
    <Col span={4} key={el.key}>
      <div className="productCategories">
        <div className="image">
          <img src={el.image} alt="product" />
        </div>
        <h3>{el.title}</h3>
      </div>
    </Col>
  ));
  return (
    <div className="block">
      <h2>Product Categories</h2>
      <Row gutter={24}>{listProductCategories}</Row>
    </div>
  );
}

export default ProductCategories;
