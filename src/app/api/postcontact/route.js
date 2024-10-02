import { NextResponse } from "next/server";
import fs from 'fs/promises';
// import path from 'path';





export async function POST(req) {
    const data = await req.json();

    const totalContact = await fs.readdir("contactdata");
    await fs.writeFile(`contactdata/${totalContact.length+1}.json`,JSON.stringify(data))
    return NextResponse.json(data);
}


export async function GET(req) {
    // const url = req.url;


    return NextResponse.json(["all"]);
  }
  