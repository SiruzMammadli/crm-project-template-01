import {NextRequest, NextResponse} from "next/server";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import axios from "axios";
import {cookies} from "next/headers";

export async function DELETE(request: NextRequest) {
    const token = request.cookies.get(`${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`)?.value;

    if (!token) return NextResponse.json({status: StatusCodes.Unauthorized, error: "Unauthorized"});

    const req = await axios.delete(`${process.env.NEXT_PUBLIC_API_V1_URL}/signout`, {
        headers: {
            Authorization: token,
        }
    });

    if (req.status === StatusCodes.NoContent) {
        cookies().delete(`${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`);
        return NextResponse.json(null);
    }

    return NextResponse.json({status: StatusCodes.Unauthorized, error: "Unauthorized"});
}