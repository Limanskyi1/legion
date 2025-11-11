
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Users } from "lucide-react";
import { userColumns, type UserRow } from "@/features/user/users-table-columns";
import { DataTable } from "@/shared/ui/data-table";


// Мокии
const mockUsers: UserRow[] = [
    {
        id: "1",
        name: "Александр Легкий",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-11-13",
    },
    {
        id: "2",
        name: "Богдан Лиманский",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-11-12",
    },
    {
        id: "3",
        name: "Гавриил Никитин",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-11-15",
    },
    {
        id: "4",
        name: "Сыдыч Адрей",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-10-23",
    },
    {
        id: "5",
        name: "Шарапов Кирилл",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-10-12",
    },
    {
        id: "6",
        name: "Николай Рудзинский",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-10-24",
    },
    {
        id: "7",
        name: "Гринч Саня",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-10-25",
    },
    {
        id: "8",
        name: "Александр Яковлевич",
        phone: "+380-99-999-99-99",
        expiredAt: "2025-11-20",
        previousVisit: "2025-09-23",
    },
]

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
                        <DataTable columns={userColumns} data={mockUsers} />


                        {/* <p>Здесь будет отображаться список всех пользователей системы.</p>
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                            <p className="text-sm text-slate-600">
                                Функционал управления пользователями будет добавлен в следующих
                                версиях.
                            </p>
                        </div> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
