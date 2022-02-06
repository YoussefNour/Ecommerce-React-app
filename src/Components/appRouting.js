import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Error/pageNotFound";
import WelcomePage from "./Home/welcomePage";
import Footer from "./Layout/footer";
import Header from "./Layout/header";
import Product from "./Products/Product";
import Login from "./User/Login";
import Registration from "./User/Registration";

function AppRouting() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="products" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Register" element={<Registration />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouting;
