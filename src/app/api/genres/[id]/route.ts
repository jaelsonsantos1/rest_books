import prisma from '../../../../../prisma/prisma'

// GET /api/genre/[id]
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const genre = await prisma.genre.findUnique({
        where: {
            id: params.id,
        },
    })

    if (!genre) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(genre), {
        headers: { "Content-Type": "application/json" },
    })
}