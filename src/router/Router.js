import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Apropos from "../pages/Apropos/Apropos";
import Logement from "../pages/Logement/Logement";
import Error from "../pages/Error/Error";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
