'use client'
import {FormInput} from "@/components/auth-layout";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {useState} from "react";

export default (
    {
        id,
        placeholder,
        isPasswordSecure = true,
        ...props
    }: Readonly<{
        id?: string;
        placeholder?: string;
        isPasswordSecure?: boolean;
        name?: string;
        register?: any;
    }>
) => {
    const [isSecure, setIsSecure] = useState(isPasswordSecure);
    
    const handleClick = () => setIsSecure(prev => !prev);
    
    const classes = cn(
        "absolute top-1/2 right-[10px] -translate-y-1/2 text-secondary-500 cursor-pointer transition-colors",
        "hover:text-secondary-950"
    )

    return (
        <FormInput
            id={id}
            placeholder={placeholder}
            type={isSecure ? "password" : "text"}
            className="pl-[10px] pr-[40px] relative"
            name={props.name}
            register={props.register}
        >
            {isSecure ? (
                <EyeIcon className={classes} onClick={handleClick}/>
            ) : (
                <EyeOffIcon className={classes} onClick={handleClick}/>
            )}
        </FormInput>
    )
}