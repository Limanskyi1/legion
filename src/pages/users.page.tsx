import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Users } from "lucide-react";

import {
  userColumn,
} from "@/features/user/users-table-columns";
import { DataTable } from "@/shared/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "@/features/user/api/users-api";

export function UsersPage() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });

  const users = usersQuery.data ?? [];
  const isError = usersQuery.isError;
  const isLoading = usersQuery.isLoading;

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
              <CardDescription>
                Все зарегистрированные пользователи
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-slate-700">
            {isError && <div className="text-red-600">Ошибка</div>}
            {isLoading ? (
              <div>Загрузка…</div>
            ) : (
              <DataTable columns={userColumn} data={users} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
