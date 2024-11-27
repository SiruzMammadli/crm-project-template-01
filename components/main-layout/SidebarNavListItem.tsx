'use client'
import Link from "next/link";
import {SidebarNavItem} from "@/components/main-layout/types";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export default (
    {
        icon,
        label,
        href,
    }: Readonly<SidebarNavItem>
) => {
    const path = usePathname();

    return (
        <li>
            <Link href={href} className={cn(
                "flex items-center gap-x-[12px] py-[8px] px-[12px] rounded-[8px] h-[40px] transition-[color,background-color]",
                "hover:bg-secondary-200",
                "[&>*]:shrink-0 [&>svg]:text-secondary-500 [&>span]:inline-flex [&>span]:items-center",
                path === href && "bg-white text-secondary-950 border-2 border-secondary-200 px-[10px] shadow-sm hover:bg-secondary-50 [&>svg]:text-secondary-950",
            )}>
                {icon}
                <span>{label}</span>
            </Link>
        </li>
    )
}