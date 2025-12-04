import Home from "../../pages/Home.jsx"
import Projet from "../../pages/Projet.jsx"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<Projet />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
