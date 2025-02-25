import prisma from '../../../../prisma/prisma';


// POST /api/reviews
export async function POST(request: Request) {
    const data = await request.json()

    const review = await prisma.review.create({
      data: {
        book_id: data.bookId,
        user_id: data.userId,
        rating: data.rating,
        comment: data.comment,
      },
    })

    return new Response(JSON.stringify(review), {
        headers: { "Content-Type": "application/json" },
    })
}

// GET /api/reviews
export async function GET() {
    const reviews = await prisma.review.findMany()

    if (!reviews) {
        return new Response(null, {
            status: 404,
        });
    }

    return new Response(JSON.stringify(reviews), {
        headers: { "Content-Type": "application/json" },
    });
}
