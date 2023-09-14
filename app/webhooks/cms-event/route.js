import { NextResponse } from "next/server";

//returns a response like a JSON data etc//
//can also handle different http methods like POST PUT GET etc// 
export async function POST(request) {
    const payload = await request.json();
    console.log("payload: ", payload);
    return new Response(null, { status: 204 });
}

