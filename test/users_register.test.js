const fetch = require("node-fetch");
const url = "http://13.125.83.126:5000/users/register"

test("Register new user", async () => {
    const response = await fetch(url, { method: "POST" })
    expect(response.status).toEqual(200)
})