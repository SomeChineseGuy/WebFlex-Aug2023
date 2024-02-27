import { NextResponse } from "next/server";

export async function GET(request) {
  console.log('fire');

  return NextResponse.json({message: "Does this work?"}, {status: 200})
}


export async function POST(request) {
  
  const data = await request.json()
  console.log(data);
  return NextResponse.json({message: "Does this work?"}, {status: 200})
}