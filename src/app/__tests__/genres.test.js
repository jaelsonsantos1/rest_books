import request from "supertest"
import genresApp from "../../app"

describe("GET /genres", () => {
    test("GET /api/genres - Deve retornar uma lista de gêneros", async () => {
        const response = await request(genresApp).get("/api/genres");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
})