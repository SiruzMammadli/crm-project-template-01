'use client';
import {cn} from "@/lib/utils";
import Image from "next/image";
import profileImg from "@/public/images/pro_pic-min.jpg";
import {ChevronsUpDownIcon, LogOutIcon} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ProfileDropdownItem} from "@/components/main-layout/types";
import {handleSignout} from "@/components/main-layout/utils";

const profileDropDownItems: ProfileDropdownItem[] = [
    {
        label: "Sign out",
        icon: LogOutIcon,
        onClick: handleSignout
    }
]

export default () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className={cn(
                    "flex items-center justify-between cursor-pointer select-none p-[8px_12px] rounded-[8px] h-[45px] transition-[color,background-color]",
                    "hover:bg-secondary-200",
                )}>
                    <div className="inline-flex gap-x-[12px] items-center">
                        <Image
                            className="w-[27px] h-[27px] object-cover rounded-full outline outline-2 outline-offset-2 outline-slate-500"
                            src={profileImg} alt=""/>
                        <span>Siruz Mammadli</span>
                    </div>
                    <ChevronsUpDownIcon className="w-[14px] h-[14px] text-slate-500"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white min-w-[220px]">
                <DropdownMenuGroup>
                    {profileDropDownItems.map((item, index) => (
                        <DropdownMenuItem
                            key={index}
                            className="cursor-pointer hover:bg-slate-100 transition-[color,background-color] flex items-center gap-x-[12px] p-[8px_12px]"
                            onClick={item?.onClick}
                        >
                            <item.icon className="w-[16px] h-[16px]"/>
                            <span>{item.label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}