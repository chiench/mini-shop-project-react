import Hero from "../components/home/hero";
import RecentProduct from "../components/home/recentProduct";
import Information from "../components/home/information";
import ProductCategories from "../components/home/productCategories";
import SaleProduct from "../components/home/saleProducts";
import TopBrand from "../components/home/topBrand";
function AppHome() {
  return (
    <div className="container">
      <Hero />
      <RecentProduct />
      <Information />
      <ProductCategories />
      <SaleProduct />
      <TopBrand />
    </div>
  );
}

export default AppHome;
