import axios from "axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export const handleSignout = async () => {
    const req = await axios.delete(`/api/auth/signout`);

    if (req.status === StatusCodes.Ok) window.location.replace('/signin');
}