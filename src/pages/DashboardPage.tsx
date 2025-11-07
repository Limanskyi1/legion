import { useState } from "react";
import { LogOut, FileText, Calendar, Users } from "lucide-react";
import { RulesPage } from "./RulesPage";
import { SchedulePage } from "./SchedulePage";
import { UsersPage } from "./UsersPage";
import { Button } from "@/shared/ui/button";
import { supabase } from "@/shared/lib/supabase/client";

type TabType = "rules" | "schedule" | "users";

export function DashboardPage() {
    const [activeTab, setActiveTab] = useState<TabType>("rules");

    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };

    const tabs = [
        { id: "rules" as TabType, label: "Регламент", icon: FileText },
        { id: "schedule" as TabType, label: "График", icon: Calendar },
        { id: "users" as TabType, label: "Пользователи", icon: Users },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "rules":
                return <RulesPage />;
            case "schedule":
                return <SchedulePage />;
            case "users":
                return <UsersPage />;
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-slate-50">
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-200">
                    <h1 className="text-xl font-bold text-slate-900">Gym CRM</h1>
                    <p className="text-sm text-slate-500 mt-1">Система управления</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-700 hover:bg-slate-100"
                                }`}
                            >
                                <Icon className="h-5 w-5" />
                                {tab.label}
                            </button>
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

            <main className="flex-1 overflow-auto">{renderContent()}</main>
        </div>
    );
}
