import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    try {
        // Await params in Next.js 15+
        const { path } = await params;

        // Get the image path from the URL
        const imagePath = path.join('/');

        // Construct the full path to the image in the assets directory
        const fullPath = join(process.cwd(), 'assets', 'images', imagePath);

        // Check if file exists
        if (!existsSync(fullPath)) {
            return new NextResponse('Image not found', { status: 404 });
        }

        // Read the file
        const imageBuffer = await readFile(fullPath);

        // Determine content type based on file extension
        const extension = imagePath.split('.').pop()?.toLowerCase();
        const contentTypeMap: { [key: string]: string } = {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'webp': 'image/webp',
            'svg': 'image/svg+xml',
        };

        const contentType = contentTypeMap[extension || ''] || 'application/octet-stream';

        // Return the image with appropriate headers
        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving image:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
