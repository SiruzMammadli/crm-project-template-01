import {z} from "zod";
import axios from "axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, {message: "Password must be at least 3 characters"}),
});

export type UserLoginForm = z.infer<typeof UserLoginSchema>;

export const onLoginFormSubmit = async (data: UserLoginForm, rememberMe: boolean, reset: Function, route: () => void) => {
    const result = UserLoginSchema.safeParse(data);

    if (result.success) {
        const req = await axios.post("/api/auth/signin", {
            ...result.data,
            rememberMe,
        });
        if (req.status === StatusCodes.Ok) {
            route();
            reset();
        }
    }
}