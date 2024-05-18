import exifr from 'exifr';
import fetch from 'node-fetch';

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("url")

    if (!query) {
        return new Response("Image URL is required", {
            status: 400,
        })
    }

    try {
        const response = await fetch(query);
        const buffer = await response.arrayBuffer();
        const metadata = await exifr.parse(buffer);

        return Response.json(metadata)
    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch image metadata", {
            status: 500,
        })
    }
}