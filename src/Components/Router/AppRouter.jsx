import Home from "../../pages/Home.jsx"
import Projet from "../../pages/Projet.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<Projet />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
