'use client';
import {ArrowLeftIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import AuthLayout from "@/pages/layouts/AuthLayout";
import Link from "next/link";
import {Form, FormField} from "@/components/auth-layout";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    onResetPasswordFormSubmit,
    UserResetPasswordForm,
    UserResetPasswordSchema
} from "@/app/(auth)/reset-password/utils";

export default () => {
    const router = useRouter();
    const {handleSubmit, register, reset} = useForm<UserResetPasswordForm>({
        resolver: zodResolver(UserResetPasswordSchema),
    })

    const onHandleSubmit = async (data: UserResetPasswordForm) => {
        await onResetPasswordFormSubmit(data, reset, () => router.replace('/password-changed'))
    }
    
    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center mt-[60px]">
                <div className="flex w-full">
                    <Link
                        href="/signin"
                        className="inline-flex items-center gap-x-[12px] text-secondary-500"
                    >
                        <ArrowLeftIcon className="w-[16px] h-[16px]"/>
                        <span className="font-normal">Back</span>
                    </Link>
                </div>
                <div className="text-center mt-[16px]">
                    <h1 className="text-[24px] font-semibold mb-[8px]">Create a New Password</h1>
                    <p className="text-secondary-500 font-normal">Enter your new password below to complete the reset
                        process. Ensure it's strong and secure</p>
                </div>
                <Form className="mt-[24px]" onSubmit={handleSubmit(onHandleSubmit)}>
                    <FormField label="New Password" placeholder="Enter your password" name="new_password" type="password"
                               isPasswordSecure={false} register={register}/>
                    <FormField label="Repeat New Password" placeholder="Enter your password" name="repeat_new_password"
                               type="password" isPasswordSecure={false} register={register}/>
                    <Button className="w-full h-[40px] rounded-[8px] mt-[16px]"
                            /* onClick={() => router.replace('/password-changed')} */>Submit</Button>
                </Form>
            </div>
        </AuthLayout>
    )
}