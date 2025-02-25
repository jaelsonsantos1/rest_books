import request from "supertest"
import booksApp from "../../app"

describe("GET /books", () => {
    test("GET /api/books - Deve retornar uma lista de livros", async () => {
        const response = await request(booksApp).get("/api/books");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
})