'use client'
import {usePathname} from "next/navigation";
import {RoutesDictionary} from "@/lib/helpers/routes";

export default () => {
    const path = usePathname();
    
    return (
        <h2 className="text-[21px]">{(RoutesDictionary[path as string]).label}</h2>
    )
}