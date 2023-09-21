import { Layout } from "antd";
import AppHeader from "./components/common/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "./pages/home";
import AppAbout from "./pages/about";
import AppShop from "./pages/shop";
import AppContact from "./pages/contact";
import FooterWidget from "./components/common/footerwidget";
import FooterCopyright from "./components/common/footerMain";
import AppFaq from "./pages/faq";
import "antd/dist/antd.min.css";
import "./App.css";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<AppHome />}></Route>
              <Route path="/about" element={<AppAbout />}></Route>
              <Route path="/shop" element={<AppShop />}></Route>
              <Route path="/contact" element={<AppContact />}></Route>
              <Route path="/faq" element={<AppFaq />}></Route>
            </Routes>
          </Content>
        </Router>
        <Footer>
          <FooterWidget />
          <FooterCopyright />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
