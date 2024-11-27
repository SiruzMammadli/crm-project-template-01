import {Button} from "@/components/ui/button";
import {FileDownIcon} from "lucide-react";

export default () => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-[24px]">Welcome back, Siruz !</h1>
            <Button className="gap-x-[6px] h-[40px]">
                <FileDownIcon/>
                <span className="font-normal">Export</span>
            </Button>
        </div>
    )
}