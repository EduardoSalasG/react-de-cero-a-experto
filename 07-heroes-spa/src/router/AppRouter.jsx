import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes, } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />


                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}

            </Routes>
        </>
    )
}
