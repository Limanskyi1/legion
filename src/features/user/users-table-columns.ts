import type { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string | number;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  role: string | null;
  expired_at: string | null;
};

export const userColumn: ColumnDef<Omit<User, "id">>[] = [
  {
    id: "name",
    header: "name",
    accessorFn: (row) =>
      `${row.first_name ?? ""} ${row.last_name ?? ""}`.trim() || "—",
  },
  { accessorKey: "phone", header: "phone" },
  { accessorKey: "role", header: "role" },
  { accessorKey: "expired_at", header: "expired_at" },
];
