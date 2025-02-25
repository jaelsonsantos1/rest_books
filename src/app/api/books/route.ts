import prisma from '../../../../prisma/prisma'


export async function POST(request: Request) {
    const data = await request.json()
    const book = await prisma.book.create({
        data: {
            title: data. title,
            author: data.author,
            description: data.description,
            publicationDate: data.publicationDate,
            genre_id: data.genre_id,
        },
    })

    return new Response(JSON.stringify(book), {
        headers: { "Content-Type": "application/json" },
    })


}

// GET /api/books
export async function GET() {
    const books = await prisma.book.findMany()

    if (!books) {
        return new Response(null, {
            status: 404,
        })
    }

    return new Response(JSON.stringify(books), {
        headers: { "Content-Type": "application/json" },
    })
}
