const request = require("supertest");

const apiRequest = {
  async getRequest(baseUrl, endpoint) {
    return await request(baseUrl).get(endpoint);
  },

  async postRequest(baseUrl, endpoint, body) {
    return await request(baseUrl).post(endpoint).send(body);
  },

  validateResponse(res, expectedStatus) {
    expect(res.status).toBe(expectedStatus);
  },
};

module.exports = apiRequest;
