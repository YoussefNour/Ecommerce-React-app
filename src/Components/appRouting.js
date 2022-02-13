import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Error/pageNotFound";
import WelcomePage from "./Home/welcomePage";
import Footer from "./Layout/footer";
import Header from "./Layout/header";
import Products from "./Products/Products";
import Login from "./User/Login";
import Registration from "./User/Registration";

function AppRouting() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="Register" element={<Registration />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouting;
