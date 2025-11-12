import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Users } from "lucide-react";

import { userColumn, mapSupBase, type SupBaseUser } from "@/features/user/users-table-columns";
import { DataTable } from "@/shared/ui/data-table";
import { supabase } from "@/shared/lib/supabase/client";


export function UsersPage() {
    const [rows, setRows] = useState<SupBaseUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;
        (async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("user_profile")
                .select("id, first_name, last_name, phone, role, expired_at");

            if (error) {
                setErr(error.message);
                setRows([]);
            } else if (!ignore) {
                setErr(null);
                setRows((data ?? []) as SupBaseUser[]);
            }
            setLoading(false);
        })();
        return () => { ignore = true; };
    }, []);

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
                        {err && <div className="text-red-600">Ошибка: {err}</div>}
                        {loading ? (
                            <div>Загрузка…</div>
                        ) : (
                            // [ИСПРАВЛЕНО] единый источник колонок и преобразования данных.
                            <DataTable columns={userColumn} data={mapSupBase(rows)} />
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}