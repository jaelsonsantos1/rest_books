import request from "supertest"
import usersApp from "../../app"

describe("GET /users", () => {
    test("GET /api/users - Deve retornar uma lista de usuários", async () => {
        const response = await request(usersApp).get("/api/users");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
})