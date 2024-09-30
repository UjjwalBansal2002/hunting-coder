import { NextResponse } from 'next/server';
import * as fs from 'fs/promises';

export async function GET(request) {
    const data = await fs.readdir("blogdata","utf-8")
    let myFile;
    let allBlogs = [];

    for(let i = 0; i < data.length; i++) {
      const item = data[i];
      myFile = await fs.readFile("blogdata/"+ item, "utf-8");
      allBlogs.push(JSON.parse(myFile));
    }
    return NextResponse.json(allBlogs);
}


