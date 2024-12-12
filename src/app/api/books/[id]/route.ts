import prisma from '../../../../../prisma/prisma'

// GET /api/books/[id]
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const book = await prisma.book.findUnique({
        where: {
            id: params.id,
        },
    })

    if (!book) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(book), {
        headers: { "Content-Type": "application/json" },
    })
}

// PUT /api/books/[id]
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const book = await prisma.book.update({
        where: {
            id: params.id,
        },
        data: {
            isActive: false,
        },
    })

    if (!book) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(book), {
        headers: { "Content-Type": "application/json" },
    })
}      
