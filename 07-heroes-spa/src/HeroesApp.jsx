import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from './auth/context'

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>

                <AppRouter>
                    <h1>HeroesApp</h1>
                </AppRouter>

            </AuthProvider>
        </>
    )
}
