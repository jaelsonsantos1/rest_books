import prisma from '../../../../prisma/prisma'

// POST /api/review
export async function POST(request: Request) {
    const data = await request.json()

    const review = await prisma.review.create({
        data: {
            rating: data.rating,
            comment: data.comment,
            book_id: data.book_id,
            user_id: data.user_id,
        },
    })

    return new Response(JSON.stringify(review), {
        headers: { "Content-Type": "application/json" },
    })
}

// GET /api/review
export async function GET() {
    const review = await prisma.review.findMany()

    if (!review) {
      return new Response(null, {
        status: 404,
      });
    }

    return new Response(JSON.stringify(review), {
      headers: { "Content-Type": "application/json" },
    });
}