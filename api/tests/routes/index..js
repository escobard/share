const request = require("supertest");

describe("Testing all routes", () =>{

  let server;

  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(() => {
    server.close();
  });

  it("responds to /", done => {
    request(server)
      .get("/")
      .expect(200, done);
  });

  it("responds to /greetings post requests", done => {
        request(server)
            .post("/greetings")
            .send({name: 'John'})
            .expect(200, done)
    });

  it("rejects /greetings post requests with missing name property", done => {
        request(server)
            .post("/greetings")
            .send({})
            .expect(400, done)
  });

  it("404 everything else", done => {
    request(server)
      .get("/foo/bar")
      .expect(404, done);
  });

});
