import { Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "@/shared/lib/supabase/client";
import { LogOut } from "lucide-react";
import { Button } from "@/shared/ui/button";
import classNames from "classnames";
import { mainLayoutTabs } from "../constants/main-layout-tabs";

export const MainLayout = () => {
    const { pathname } = useLocation();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <div className="flex h-screen bg-slate-50">
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-200">
                    <h1 className="text-xl font-bold text-slate-900">Gym CRM</h1>
                    <p className="text-sm text-slate-500 mt-1">Система управления</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {mainLayoutTabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <Link
                                key={tab.id}
                                to={tab.href}
                                className={classNames(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    {
                                        "bg-slate-900 text-white": pathname === tab.href,
                                    }
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {tab.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={handleSignOut}
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Выйти
                    </Button>
                </div>
            </aside>
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};
