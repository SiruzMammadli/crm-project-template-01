'use client';
import {CheckIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import AuthLayout from "@/pages/layouts/AuthLayout";
import {useRouter} from "next/navigation";

export default () => {
    const router = useRouter();
    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center mt-[60px]">
                <div className="flex items-center">
                    <span className="inline-flex items-center justify-center p-[16px] bg-primary-50 rounded-full">
                        <CheckIcon className="w-[54px] h-[54px] text-primary-800"/>
                    </span>
                </div>
                <div className="text-center mt-[16px]">
                    <h1 className="text-[24px] font-semibold mb-[8px]">Your password has been successfully reset!</h1>
                    <p className="text-secondary-500 font-normal">You can now sign in with your new password. If you encounter any issues, please contact support</p>
                </div>
                <Button className="w-full h-[40px] rounded-[8px] mt-[24px]" onClick={() => router.replace('/signin')}>Back to Sign in</Button>
            </div>
        </AuthLayout>
    )
}