import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@/features/auth/login";
import { RegistrationPage } from "@/features/auth/registration";
import { ROUTES } from "@/shared/config/router/routes";
import { RulesPage } from "@/pages/rules.page";
import { SchedulePage } from "@/pages/schedule.page";
import { UsersPage } from "@/pages/users.page";
import { MainLayout } from "@/app/providers/router/layouts/main-layout";
import { ProtectedRoute } from "../layouts/protected-route";

export const routerConfig = createBrowserRouter([
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
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <RulesPage />,
                    },
                    {
                        path: ROUTES.schedule.page,
                        element: <SchedulePage />,
                    },
                    {
                        path: ROUTES.users.page,
                        element: <UsersPage />,
                    },
                ],
            },
        ],
    },
]);
