import prisma from "../../../../../prisma/prisma";

// POST /api/readhistory/
export async function POST(request: Request) {
    const data = await request.json()

    const readhistory = await prisma.readingHistory.create({
        data: {
            readDate: data.readDate,
            book_id: data.book_id,
            user_id: data.user_id,
        },
    })

    if (!readhistory) {
        return new Response(null, {
            status: 404,
        });
    }

    return new Response(JSON.stringify(readhistory), {
        headers: { "Content-Type": "application/json" },
    })
}

// GET /api/readhistory/
export async function GET() {
    const readhistory = await prisma.readingHistory.findMany()

    if (!readhistory) {
        return new Response(null, {
            status: 404,
        });
    }

    return new Response(JSON.stringify(readhistory), {
        headers: { "Content-Type": "application/json" },
    });
}