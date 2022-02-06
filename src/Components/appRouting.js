import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Error/pageNotFound";
import WelcomePage from "./Home/welcomePage";
import Footer from "./Layout/footer";
import Header from "./Layout/header";
import Product from "./Products/Product";

function AppRouting() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="products" element={<Product/>}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouting;
