import { NextResponse } from "next/server";
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        // Parse the request body
        const data = await req.json();

        // Define the directory path for contact data
        const directoryPath = path.join(process.cwd(), 'contactdata');

        // Ensure the contactdata directory exists
        try {
            await fs.access(directoryPath);
        } catch {
            await fs.mkdir(directoryPath, { recursive: true });
        }

        // Get the number of files in the directory to generate the new filename
        const totalContact = await fs.readdir(directoryPath);

        // Write the data to a new file with a unique filename
        const newFilePath = path.join(directoryPath, `${totalContact.length + 1}.json`);
        await fs.writeFile(newFilePath, JSON.stringify(data));

        // Return a response with the data
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error handling POST request:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
