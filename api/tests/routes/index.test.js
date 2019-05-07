const request = require("supertest");

// TODO - base tests for API to be updated for all Share routes
describe("Testing all routes", () => {
  let server;

  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(() => {
    server.close();
  });

  it("responds to /health", done => {
    request(server)
      .get("/health")
      .expect(
        {
          healthy: true,
          process: "dev"
        },
        done()
      );
  });

  it("404 everything else", done => {
    request(server)
      .get("/foo/bar")
      .expect(404, done());
  });
});
