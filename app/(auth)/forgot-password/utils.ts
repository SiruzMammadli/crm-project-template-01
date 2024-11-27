import {z} from "zod";
import axios from "axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export const UserForgotPasswordSchema = z.object({
    email: z.string().email(),
});

export type UserForgotPasswordForm = z.infer<typeof UserForgotPasswordSchema>;

export const onForgotPasswordFormSubmit = async (data: UserForgotPasswordForm, reset: Function, route: () => void) => {
    const result = UserForgotPasswordSchema.safeParse(data);

    if (result.success) {
        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_V1_URL}/forgot-password`, result.data);
        if (req.status === StatusCodes.NoContent) {
            route();
            reset();
        }
    }
}