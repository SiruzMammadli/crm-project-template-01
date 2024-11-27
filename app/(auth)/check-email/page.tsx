'use client';
import AuthLayout from "@/pages/layouts/AuthLayout";
import {MailIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default () => {
    const handleClick = () => window.open('https://gmail.com', "_blank");
    
    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center mt-[60px]">
                <div className="flex items-center">
                    <span className="inline-flex items-center justify-center p-[16px] bg-primary-50 rounded-full">
                        <MailIcon className="w-[54px] h-[54px] text-primary-800"/>
                    </span>
                </div>
                <div className="text-center mt-[16px]">
                    <h1 className="text-[24px] font-semibold mb-[8px]">Check your email</h1>
                    <p className="text-secondary-500 font-normal">We sent a password reset link to your email. Please
                        check your inbox</p>
                </div>
                <Button className="w-full h-[40px] rounded-[8px] mt-[24px]" onClick={handleClick}>Open Gmail</Button>
                <div className="flex items-center gap-x-[4px] mt-[16px]">
                    <span className="text-secondary-500 font-normal">Didn't received the email?</span>
                    <button className="hover:underline">Resend</button>
                </div>
            </div>
        </AuthLayout>
    )
};