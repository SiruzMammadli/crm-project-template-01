import {HTMLInputTypeAttribute, useId} from "react";
import FormInput from "./FormInput";
import FormPasswordInput from "@/components/auth-layout/FormPasswordInput";
import {register} from "next/dist/client/components/react-dev-overlay/pages/client";

export default (
    {
        label,
        placeholder,
        type,
        name,
        ...props
    }: Readonly<{
        label: string;
        placeholder?: string;
        type?: HTMLInputTypeAttribute;
        name?: string;
        register?: any;
        isPasswordSecure?: boolean;
    }>
) => {
    const uuid = useId();
    return (
        <div className="[&>*]:block">
            <label htmlFor={uuid} className="mb-[4px]">{label}</label>
            {type === 'password' ? (
                <FormPasswordInput
                    id={uuid}
                    placeholder={placeholder}
                    name={name}
                    register={props.register}
                    isPasswordSecure={props.isPasswordSecure}
                />
            ) : (
                <FormInput
                    id={uuid}
                    placeholder={placeholder}
                    type={type}
                    className="px-[10px]"
                    name={name}
                    register={props.register}
                />
            )}
        </div>
    );
};
