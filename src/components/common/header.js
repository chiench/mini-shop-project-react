import {
  MobileOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
function AppHeader() {
  return (
    <div className="container">
      {/* topBar */}
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li>
              <a href="tel:0366019758">
                {" "}
                <MobileOutlined /> <span>0366019758</span>
              </a>
            </li>
            <li>
              <a href="mailto:chienhandsome69@gmail.com">
                <MailOutlined />
                <span>chienhandsome69@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li>
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <InstagramOutlined />
              </a>
            </li>
            <button>
              <UserOutlined />
              My account
            </button>
          </ul>
        </div>
      </div>
      {/* header */}
      <div className="header separator">
        <div className="logo">Green Star</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/faq">Faq</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
