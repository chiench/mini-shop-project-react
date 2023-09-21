import { BackTop } from "antd";
function FooterCopyright() {
  return (
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">©2022 Created by Grocery</div>
        <div className="toTop">
          <img src="../../assets/images/payment.png" alt="Payment" />
        </div>
        <BackTop></BackTop>
      </div>
    </div>
  );
}

export default FooterCopyright;
