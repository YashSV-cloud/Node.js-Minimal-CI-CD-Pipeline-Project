const request = require("supertest");
const app = require("../app");

test("GET / returns message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Node CI/CD App Running");
});
