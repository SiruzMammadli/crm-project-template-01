'use client'
import {Form, FormField} from "@/components/auth-layout";
import {Button} from "@/components/ui/button";
import AuthLayout from "@/pages/layouts/AuthLayout";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {onRegisterFormSubmit, UserRegisterForm, UserRegisterSchema} from "@/app/(auth)/signup/utils";
import {useRouter} from "next/navigation";


export default () => {
    const router = useRouter();
    const {handleSubmit, register, reset} = useForm<UserRegisterForm>({
        resolver: zodResolver(UserRegisterSchema),
    });

    const onHandleSubmit = async (data: UserRegisterForm) => {
        await onRegisterFormSubmit(data, reset, () => router.replace('/signin'))
    }

    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center mt-[60px]">
                <div className="text-center">
                    <h1 className="text-[24px] font-semibold mb-[8px]">Create Your CRM Account</h1>
                    <p className="text-secondary-500 font-normal">Sign up to access comprehensive CRM features</p>
                </div>
                <Form
                    className="mt-[24px]"
                    onSubmit={handleSubmit(onHandleSubmit)}
                >
                    <FormField label="Fullname" placeholder="Enter your name" name="fullname" register={register}/>
                    <FormField label="Email" placeholder="Enter your email" type="email" name="email"
                               register={register}/>
                    <FormField label="Password" placeholder="Enter your password" type={"password"} name="password"
                               register={register}/>
                    <FormField label="Repeat Password" placeholder="Enter your password" type={"password"}
                               name="repeat_password" register={register}/>
                    <Button className="w-full h-[40px] mt-[16px] rounded-[8px]">Sign up</Button>
                </Form>
                <div className="flex items-center gap-x-[4px] mt-[16px]">
                    <span className="text-secondary-500 font-normal">Already have an account?</span>
                    <Link href="/signin" className="hover:underline">Sign in</Link>
                </div>
            </div>
        </AuthLayout>
    )
}