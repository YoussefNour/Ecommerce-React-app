import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Error/pageNotFound";
import WelcomePage from "./Home/welcomePage";
import Footer from "./Layout/footer";
import Header from "./Layout/header";

function AppRouting() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouting;
