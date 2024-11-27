import {HTMLInputTypeAttribute} from "react";
import {cn} from "@/lib/utils";

export default (
    {
        id,
        placeholder,
        children,
        type = "text",
        ...props
    }: Readonly<{
        id?: string;
        placeholder?: string;
        type?: HTMLInputTypeAttribute;
        children?: React.ReactNode;
        className?: string;
        name?: string;
        register?: any;
    }>
) => {
    return (
        <div
            className={cn("w-full h-[40px] border-2 border-secondary-200 rounded-[8px] mb-[12px] overflow-hidden", props.className)}
        >
            <input
                className="w-full h-full font-normal outline-none"
                id={id}
                placeholder={placeholder}
                type={type}
                name={props.name}
                {...props?.register?.(props.name)}
            />
            {children ? children : null}
        </div>
    );
};
