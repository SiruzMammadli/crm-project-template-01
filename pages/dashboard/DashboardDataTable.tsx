'use client';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Checkbox} from "@/components/ui/checkbox";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {DotsVerticalIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

type DashboardTableRowData = {
    id: string;
    name: string;
    email: string;
    role: string;
    department: string;
    status: string;
}
const tableDatas: DashboardTableRowData[] = [
    {
        id: '#00001',
        name: 'Siruz Mammadli',
        email: 'siruz.mammadli@gmail.com',
        role: 'UI/UX Designer',
        department: 'Team Projects',
        status: 'Full-time',
    },
    {
        id: '#00002',
        name: 'Siruz Mammadli 2',
        email: 'therous95@gmail.com',
        role: 'Software Developer',
        department: 'Team Projects',
        status: 'Part-time',
    },
]

const columns: ColumnDef<DashboardTableRowData>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                aria-label="Select all"
                checked={
                    table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                className="bg-white"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                aria-label="Select row"
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                className="bg-white"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: "ID",
        cell: ({row}) => <div>{row.getValue('id')}</div>,
    },
    {
        accessorKey: 'name',
        header: "Name",
        cell: ({row}) => <div>{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'email',
        header: "Email",
        cell: ({row}) => <div>{row.getValue('email')}</div>,
    },
    {
        accessorKey: 'role',
        header: "Role",
        cell: ({row}) => <div>{row.getValue('role')}</div>,
    },
    {
        accessorKey: 'department',
        header: "Department",
        cell: ({row}) => <div>{row.getValue('department')}</div>,
    },
    {
        accessorKey: 'status',
        header: "Status",
        cell: ({row}) => <div>{row.getValue('status')}</div>,
    },
    {
        id: "actions",
        header: "Action",
        enableHiding: false,
        cell: ({row}) => {
            const data = row.original;
            
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="w-[40px] h-[40px]">
                            <DotsVerticalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
]

export default () => {
    const [rowSelection, setRowSelection] = useState({});
    
    const table = useReactTable({
        data: tableDatas,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection,
        }
    })
    // className="border-2 border-secondary-200 rounded-[8px] overflow-hidden"
    return (
        <Card className="overflow-hidden">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="bg-secondary-50 h-[40px]">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="[&:first-of-type]:pl-[16px]">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && 'selected'}
                            className="h-[50px]"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} className="[&:first-of-type]:pl-[16px]">
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Card>
    )
}