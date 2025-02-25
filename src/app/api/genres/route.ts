import prisma from '../../../../prisma/prisma'

// POST /api/gener
export async function POST(request: Request) {
    const data = await request.json()

    const genre = await prisma.genre.create({
        data: {
            name: data.name,
        },
    })

    return new Response(JSON.stringify(genre), {
        headers: { "Content-Type": "application/json" },
    })
}

// GET /api/geners
export async function GET() {
    const genres = await prisma.genre.findMany()

    if (!genres) {
      return new Response(null, {
        status: 404,
      });
    }

    return new Response(JSON.stringify(genres), {
      headers: { "Content-Type": "application/json" },
    });
}