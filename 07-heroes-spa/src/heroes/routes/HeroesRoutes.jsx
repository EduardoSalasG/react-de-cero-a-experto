import { Route, Routes, Navigate } from 'react-router-dom'

import { DcPage, Hero, MarvelPage, Search } from '../pages'
import { Navbar } from "../../ui"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">

                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/dc" element={<DcPage />} />

                    <Route path="/search" element={<Search />} />
                    <Route path="/hero/:id" element={<Hero />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>

            </div>


        </>
    )
}
