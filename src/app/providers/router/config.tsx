import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { LoginPage } from "@/features/auth/login";
import { RegistrationPage } from "@/features/auth/registration";
import { DashboardPage } from "@/pages/DashboardPage";
import { ROUTES } from "@/shared/config/router/routes";

export const router = createBrowserRouter([
    {
        path: ROUTES.auth.login.page,
        element: <LoginPage />,
    },
    {
        path: ROUTES.auth.registration.page,
        element: <RegistrationPage />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        ),
    },
]);
