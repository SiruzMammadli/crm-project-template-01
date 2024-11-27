import {SidebarNavListType} from "@/components/main-layout/types";
import {
    CalendarIcon,
    ChartAreaIcon,
    GaugeIcon,
    ReceiptTextIcon,
    SettingsIcon,
    UserPlusIcon,
    UsersIcon
} from "lucide-react";
import {SidebarNavList} from "@/components/main-layout/index";
import SidebarProfileMenu from "@/components/main-layout/SidebarProfileMenu";

const navList: SidebarNavListType[] = [
    {
        title: "MAIN MENU",
        items: [
            {icon: <GaugeIcon/>, label: 'Dashboard', href: '/app'},
            {icon: <CalendarIcon/>, label: 'Calendar', href: '/app/calendar'},
            {icon: <SettingsIcon/>, label: 'Settings', href: '/app/settings'},
        ]
    },
    {
        title: "TEAM MANAGEMENT",
        items: [
            {icon: <ChartAreaIcon/>, label: 'Performance', href: '/app/performance'},
            {icon: <ReceiptTextIcon/>, label: 'Invoices', href: '/app/invoices'},
            {icon: <UsersIcon/>, label: 'Employees', href: '/app/employees'},
            {icon: <UserPlusIcon/>, label: 'Hiring', href: '/app/hiring'},
        ]
    }
]

export default () => {
    return (
        <aside
            className="flex flex-col h-[calc(100dvh_-_16px)] p-[8px] whitespace-nowrap overflow-hidden [&>*+*]:mt-[12px] [&>section>*+*]:mt-[12px]"
        >
            <div className="flex justify-between items-center h-[40px]">
                <div>ChannelsDrop</div>
            </div>
            <section className="grow">
                {navList.map((nav, key) => (
                    <SidebarNavList key={key} title={nav.title} items={nav.items}/>
                ))}
            </section>
            <SidebarProfileMenu/>
        </aside>
    )
}