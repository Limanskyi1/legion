
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Users } from "lucide-react";

export function UsersPage() {
    return (
        <div className="p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900">Пользователи</h1>
                <p className="text-slate-600 mt-2">Управление пользователями системы</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-lg">
                            <Users className="h-6 w-6 text-slate-700" />
                        </div>
                        <div>
                            <CardTitle>Список пользователей</CardTitle>
                            <CardDescription>Все зарегистрированные пользователи</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 text-slate-700">
                        <p>Здесь будет отображаться список всех пользователей системы.</p>
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                            <p className="text-sm text-slate-600">
                                Функционал управления пользователями будет добавлен в следующих
                                версиях.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
