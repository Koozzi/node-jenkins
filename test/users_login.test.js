const fetch = require("node-fetch");
const url = "http://54.180.94.117:5000/users/login"

test("Login", async () => {
    const response = await fetch(url, { method: "POST" })
    expect(response.status).toEqual(200)
})