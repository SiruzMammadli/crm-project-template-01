'use client';
import {Form, FormField} from "@/components/auth-layout";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import AuthLayout from "@/pages/layouts/AuthLayout";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {onLoginFormSubmit, UserLoginForm, UserLoginSchema} from "@/app/(auth)/signin/utils";

export default () => {
    const router = useRouter();
    const [isRememberMeChecked, setRememberMeChecked] = useState<boolean>(true);
    const {handleSubmit, register, reset} = useForm<UserLoginForm>({
        resolver: zodResolver(UserLoginSchema),
    })

    const onHandleSubmit = async (data: UserLoginForm) => {
        await onLoginFormSubmit(data, isRememberMeChecked, reset, () => router.replace('/app'))
    }
    
    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center mt-[60px]">
                <div className="text-center">
                    <h1 className="text-[24px] font-semibold mb-[8px]">Welcome Back to CRM</h1>
                    <p className="text-secondary-500 font-normal">Enter your email and password to continue.</p>
                </div>
                <Form className="mt-[24px]" onSubmit={handleSubmit(onHandleSubmit)}>
                    <FormField label="Email" placeholder="Enter your email address" name="email" register={register}/>
                    <FormField label="Password" placeholder="Enter your password" type={"password"} name="password" register={register}/>
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-x-[8px]">
                            <Checkbox
                                defaultChecked={isRememberMeChecked}
                                onCheckedChange={(value) => setRememberMeChecked(value as boolean)}
                                className="shadow-none border-2 border-secondary-200 w-[18px] h-[18px] rounded-[4px]"
                                id="remember"
                            />
                            <label htmlFor="remember"
                                   className="select-none cursor-pointer text-secondary-500 font-normal">
                                Remember me
                            </label>
                        </div>
                        <Link href="/forgot-password">Forgot password</Link>
                    </div>
                    <Button className="w-full h-[40px] rounded-[8px] mt-[16px]">Sign in</Button>
                </Form>
                <div className="flex items-center gap-x-[4px] mt-[16px]">
                    <span className="text-secondary-500 font-normal">Don't have an account?</span>
                    <Link href="/signup" className="hover:underline">Sign up</Link>
                </div>
            </div>
        </AuthLayout>
    );
};
