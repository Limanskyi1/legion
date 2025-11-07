import { ROUTES } from "@/shared/config/router/routes";
import { Calendar, FileText, Users } from "lucide-react";

type IconType = typeof FileText;
type MainLayoutTab = { id: string; href: string; label: string; icon: IconType };

export const mainLayoutTabs: MainLayoutTab[] = [
    { id: "rules", href: ROUTES.rules.page, label: "Регламент", icon: FileText },
    { id: "schedule", href: ROUTES.schedule.page, label: "График", icon: Calendar },
    { id: "users", href: ROUTES.users.page, label: "Пользователи", icon: Users },
];