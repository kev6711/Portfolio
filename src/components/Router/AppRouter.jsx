import Home from "../../pages/Home.jsx"
import Projet from "../../pages/Projet/Projet.jsx"
import MentionsLégales from "../../pages/MentionsLégales/MentionsLégales.jsx"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
    return (
        <BrowserRouter basename="/Portfolio">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<Projet />} />
                <Route path="/mentions-legales" element={<MentionsLégales />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
