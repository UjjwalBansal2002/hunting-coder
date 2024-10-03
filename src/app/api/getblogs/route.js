import * as fs from 'fs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
    // Check if this code is running in a build environment (e.g., static generation)
    if (process.env.NEXT_PHASE === 'phase-production-build') {
        return new Response('This operation is not allowed during build', { status: 400 });
    }

    try {
        // Extract search parameters from the request URL
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get('slug');

        // Validate that the 'slug' parameter is provided
        if (!slug) {
            return new Response('Search parameter "slug" is missing', { status: 400 });
        }

        // Read the file based on the 'slug' parameter
        const data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
        return new Response(data, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error reading the file:', error);

        // Handle file not found error
        if (error.code === 'ENOENT') {
            return new Response('File not found', { status: 404 });
        } else {
            // Handle all other errors
            return new Response('Internal Server Error', { status: 500 });
        }
    }
}
