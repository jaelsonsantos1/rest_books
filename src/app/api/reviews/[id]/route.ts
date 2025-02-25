import prisma from "../../../../../prisma/prisma"

// GET /api/reviews/[id]
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const review = await prisma.review.findUnique({
        where: {
            id: params.id,
        },
    })

    if (!review) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(review), {
        headers: { "Content-Type": "application/json" },
    })
}