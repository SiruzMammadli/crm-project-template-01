import {NextRequest, NextResponse} from "next/server";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export async function POST(request: NextRequest) {
    const {email, password, rememberMe} = await request.json();
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_V1_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            rememberMe
        })
    });

    if (!result.ok) {
        return NextResponse.json({error: 'Login failed'}, {status: StatusCodes.Unauthorized});
    }
    
    const data = await result.json();
    
    const response = NextResponse.json(null, {status: StatusCodes.Ok});
    response.cookies.set("crm_sid", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: rememberMe ? 3600 * 24 * 30 : undefined, // 30 days
        path: "/",
        sameSite: 'lax',
    });
    return response;
}