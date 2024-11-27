import {Button} from "@/components/ui/button";
import {BellIcon, MailIcon} from "lucide-react";
import {HeaderTitle} from "@/components/main-layout/index";

export default () => {
    return (
        <header className="border-b-2 px-[24px] h-[var(--header-height)]">
            <div className="flex items-center justify-between h-full">
                <HeaderTitle/>
                <div className="flex items-center gap-x-[12px]">
                    <Button variant="outline" size="icon" className="w-[40px] h-[40px]">
                        <MailIcon/>
                    </Button>
                    <Button variant="outline" size="icon" className="w-[40px] h-[40px]">
                        <BellIcon/>
                    </Button>
                </div>
            </div>
        </header>
    )
}