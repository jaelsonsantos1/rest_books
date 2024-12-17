import prisma from "../../../../../../../prisma/prisma";

// POST /api/reviews/[id]/all
export async function GET(request: Request, id: string) {
    const reviews = await prisma.review.findMany({
        where: {
            book_id: id,
        },
    });

    if (!reviews) {
        return new Response(null, {
            status: 404,
        });
    }

    return new Response(JSON.stringify(reviews), {
        headers: { "Content-Type": "application/json" },
    });
}
