import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Apropos from "../pages/Apropos/Apropos";
import Logement from "../pages/Logement/Logement";
import Error from "../pages/Error/Error";
import Footer from "../components/Footer/Footer";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
