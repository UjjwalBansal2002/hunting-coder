import * as fs from 'fs';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const search = searchParams.get('search');

        if (!search) {
            return new Response('Search parameter is missing', { status: 400 });
        }

        const data = await fs.promises.readFile(`blogdata/${search}.json`, 'utf-8');
        return new Response(data, { status: 200 });
    } catch (error) {
        console.error('Error reading the file:', error);

        if (error.code === 'ENOENT') {
            return new Response('File not found', { status: 404 });
        } else {
            return new Response('Internal Server Error', { status: 500 });
        }
    }
}



  


