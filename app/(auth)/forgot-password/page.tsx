'use client';
import AuthLayout from "@/pages/layouts/AuthLayout";
import {Form, FormField} from "@/components/auth-layout";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    onForgotPasswordFormSubmit,
    UserForgotPasswordForm,
    UserForgotPasswordSchema
} from "@/app/(auth)/forgot-password/utils";
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import {useRouter} from "next/navigation";

export default () => {
    const router = useRouter();
    const {handleSubmit, register, reset} = useForm<UserForgotPasswordForm>({
        resolver: zodResolver(UserForgotPasswordSchema),
    })

    const onHandleSubmit = async (data: UserForgotPasswordForm) => {
        await onForgotPasswordFormSubmit(data, reset, () => router.replace(`/check-email?email=${data.email}`));
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
                    <h1 className="text-[24px] font-semibold mb-[8px]">Forgot Password</h1>
                    <p className="text-secondary-500 font-normal">No worries! Enter your email address below, and we'll
                        send you a link to reset your password.</p>
                </div>
                <Form className="mt-[24px]" onSubmit={handleSubmit(onHandleSubmit)}>
                    <FormField label="Email" placeholder="Enter your email address" name="email" register={register}/>
                    <Button className="w-full h-[40px] rounded-[8px] mt-[16px]">Submit</Button>
                </Form>
            </div>
        </AuthLayout>
    )
}