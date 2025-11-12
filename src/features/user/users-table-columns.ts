import type { ColumnDef } from "@tanstack/react-table";

// было export, но я нигде кроме этого фаила это не использую, потому я убрал export. 
type userRows = {
    first_name: string | null
    last_name: string | null
    phone: string | null
    role: string | null
    expired_at: string | null
}

export const userColumn: ColumnDef<userRows>[] = [
    {
        id: "name",                 // 👈 ключ виртуальной колонки
        header: "name",
        accessorFn: (row) =>
            (`${row.first_name ?? ""} ${row.last_name ?? ""}`).trim() || "—", // 👈 объединение
    }, // ммм как вкусно, вайбкодинг :)
    { accessorKey: "phone", header: "phone" },
    { accessorKey: "role", header: "role" },
    { accessorKey: "expired_at", header: "expired_at" },
]

export type SupBaseUser = {
    id: string | number
    first_name: string | null
    last_name: string | null
    phone: string | null
    role: string | null
    expired_at: string | null
}

export function mapSupBase(rows: SupBaseUser[]): userRows[] {
    return (rows ?? []).map(r => ({
        first_name: r.first_name ?? "—",
        last_name: r.last_name ?? "—",
        phone: r.phone ?? "—",
        role: r.role ?? "—",
        expired_at: r.expired_at ?? "—",
    }))
}
