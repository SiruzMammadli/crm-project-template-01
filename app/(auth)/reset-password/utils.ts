import {z} from "zod";
import axios from "axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export const UserResetPasswordSchema = z.object({
    new_password: z.string().min(5, {message: "Password must be at least 3 characters"}),
    repeat_new_password: z.string(),
}).refine(data => data.new_password === data.repeat_new_password);

export type UserResetPasswordForm = z.infer<typeof UserResetPasswordSchema>;

export const onResetPasswordFormSubmit = async (data: UserResetPasswordForm, reset: Function, route: () => void) => {
    const result = UserResetPasswordSchema.safeParse(data);

    if (result.success) {
        const paramsStr = window.location.search.substring(1).split("&");
        const data = {
            email: paramsStr[0].split('=')[1],
            access_token: paramsStr[1].split('=')[1],
            new_password: result.data.new_password
        }

        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_V1_URL}/reset-password`, data);
        if (req.status === StatusCodes.NoContent) {
            route();
            reset();
        }
    }
}