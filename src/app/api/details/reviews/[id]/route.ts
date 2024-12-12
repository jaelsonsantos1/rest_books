import prisma from '../../../../../prisma/prisma'

// GET /api/reviws/[id]
export async function GET(request: Request, id: string) {
    const review = await prisma.review.findUnique({
        where: {
            id: id,
        },
    });

    if (!review) {
        return new Response(null, {
            status: 404,
        });
    }

    return new Response(JSON.stringify(review), {
        headers: { "Content-Type": "application/json" },
    });
}