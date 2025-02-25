import prisma from "../../../../../../../prisma/prisma";

// POST /api/readhistory/[id]/all
export async function GET(request: Request, id: string) {
    const readhistory = await prisma.readingHistory.findMany({
        where: {
            user_id: id,
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
