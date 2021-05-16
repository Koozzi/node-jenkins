const fetch = require("node-fetch");
const baseURL = "http://15.164.102.193:5000/users/register"

test("Register new user", async () => {
    const response = await fetch(baseURL, { method: "POST" })
    expect(response.status).toEqual(200)
})