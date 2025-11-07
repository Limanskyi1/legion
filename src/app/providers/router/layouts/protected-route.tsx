import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "@/shared/lib/supabase/client";
import { Loader } from "lucide-react";
import { ROUTES } from "@/shared/config/router/routes";

interface ProtectedRouteProps {
    redirectIfAuthenticated?: boolean;
}

export const ProtectedRoute = ({
    redirectIfAuthenticated = false,
}: ProtectedRouteProps) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setAuthenticated(!!user);
            setLoading(false);
        };

        checkSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setAuthenticated(!!session);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader className="animate-spin" />
            </div>
        );
    }

    if (redirectIfAuthenticated && authenticated) {
        return <Navigate to="/" replace />;
    }

    if (!redirectIfAuthenticated && !authenticated) {
        return <Navigate to={ROUTES.auth.login.page} replace />;
    }

    return <Outlet />;
};
