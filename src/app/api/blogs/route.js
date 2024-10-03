import { NextResponse } from 'next/server';
import * as fs from 'fs/promises';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try {
        // Read the directory containing the blog data
        const data = await fs.readdir("blogdata", "utf-8");
        let allBlogs = [];

        // Loop through each file and read its contents
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const myFile = await fs.readFile(`blogdata/${item}`, "utf-8");
            allBlogs.push(JSON.parse(myFile));
        }

        // Return the JSON response with all blog data
        return NextResponse.json(allBlogs);
    } catch (error) {
        console.error('Error reading blog data:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
