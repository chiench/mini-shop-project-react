import { Col, Row, List, Avatar, Tag } from "antd";
const featured = [
  {
    image: "../../assets/images/img-footer1.jpg",
    title: "Kelloggs Crunchy Nut Hazelnut",
    cost: "£2.50",
    link: "https://www.google.com/",
  },
  {
    image: "../../assets/images/img-footer2.jpg",
    title: "Branston Baked Beans in a Rich",
    cost: "£3.50",
    link: "https://www.google.com/",
  },
  {
    image: "../../assets/images/img-footer3.jpg",
    title: "Breeze Toilet Tissue Soft White 24 Roll",
    cost: "£2.50",
    link: "https://www.google.com/",
  },
];

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

function FooterWidget() {
  return (
    <div className="container">
      <div className="footerWidget">
        <Row gutter={24}>
          <Col span={6}>
            <h3>Featured</h3>
            <List
              dataSource={featured}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.cost}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>
            <h3>Top rated</h3>
            <List
              dataSource={featured}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.cost}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>
            <h3>Tags</h3>
            <div className="tags">
              <Tag>Frozen</Tag>
              <Tag>
                <a href="https://github.com/ant-design/ant-design/issues/1862">
                  Kitchen
                </a>
              </Tag>
              <Tag closable>Drinks</Tag>
              <Tag closable>Beer &amp; Wine</Tag>
              <Tag>Chocolates</Tag>
            </div>
          </Col>
          <Col span={6}>
            <h3>Recent posts</h3>
            <List
              className="recentPost"
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterWidget;
