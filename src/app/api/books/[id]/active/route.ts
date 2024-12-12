import prisma from '../../../../../../prisma/prisma'

// GET /api/books/[id]/active
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const book = await prisma.book.update({
        where: {
            id: params.id,
        },
        data: {
            isActive: true,
        },
    })

    if (!book) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(book), {
      headers: { "Content-Type": "application/json" },
    });
}