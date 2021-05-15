const fetch = require("node-fetch");
const baseURL = "http://localhost:5000/users/register"

test("Register new user", async () => {
    const response = await fetch(baseURL, { method: "POST" })
    expect(response.status).toEqual(200)
})