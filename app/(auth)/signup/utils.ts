import {z} from "zod";
import axios from "axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export const UserRegisterSchema = z.object({
    fullname: z.string().min(3, {message: "Fullname must be at least 3 characters"}),
    email: z.string().email(),
    password: z.string().min(5, {message: "Password must be at least 3 characters"}),
    repeat_password: z.string(),
}).refine(data => data.password === data.repeat_password);

export type UserRegisterForm = z.infer<typeof UserRegisterSchema>;

export const onRegisterFormSubmit = async (data: UserRegisterForm, reset: Function, route: () => void) => {
    const result = UserRegisterSchema.safeParse(data);

    if (result.success) {
        const {status} = await axios.post(`${process.env.NEXT_PUBLIC_API_V1_URL}/signup`, {
            ...result.data,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'utc'
        });
        if (status === StatusCodes.Created) {
            reset();
            route();
        }
    }
}