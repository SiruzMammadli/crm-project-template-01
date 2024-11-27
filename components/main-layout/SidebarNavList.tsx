import {SidebarNavListType} from "@/components/main-layout/types";
import {SidebarNavListItem} from "@/components/main-layout/index";

export default (
    {
        title,
        items,
    }: Readonly<SidebarNavListType>
) => {
    return (
        <nav>
            <h6 className="tracking-[1px] text-[11px] text-secondary-500">{title}</h6>
            <div className="mt-[8px]">
                <ul className="flex flex-col gap-y-[4px]">
                    {items.map((item, key) => (
                        <SidebarNavListItem key={key} {...item}/>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

