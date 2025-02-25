import request from "supertest"
import reviewsApp from "../../app"

describe("GET /reviews", () => {
    test("GET /api/reviews - Deve retornar uma lista de reviews", async () => {
        const response = await request(reviewsApp).get("/api/reviews");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
})