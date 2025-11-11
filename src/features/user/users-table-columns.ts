import type { ColumnDef } from "@tanstack/react-table"

export type UserRow = {
    id: string
    name: string
    phone: string | null
    expiredAt: string
    previousVisit: string
}

export const userColumns: ColumnDef<UserRow>[] = [
    {
        accessorKey: "name",
        header: "Имя",
    },
    {
        accessorKey: "phone",
        header: "Номер",
    },
    {
        accessorKey: "expiredAt",
        header: "Истекает",
    },
    {
        accessorKey: "previousVisit",
        header: "Последний визит",
    },
]
