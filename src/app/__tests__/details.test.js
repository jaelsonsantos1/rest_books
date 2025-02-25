import request from "supertest"
import detailsApp from "../../app"

describe("GET /details", () => {
    test("GET /api/details - Deve retornar detalhes de um livro", async () => {
        const response = await request(detailsApp).get("/api/details?id=1");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("title");
    })
})