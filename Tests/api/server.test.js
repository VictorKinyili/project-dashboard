import { describe, expect, it, vi } from "vitest";
import handler from "../../api/server.js";

function createResponse() {
  return {
    statusCode: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
    setHeader: vi.fn(),
  };
}

describe("Vercel products API", () => {
  it("returns the bundled products for collection requests", () => {
    const res = createResponse();

    handler({ method: "GET", query: { resource: "products" } }, res);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("name");
  });

  it("returns a product by ID", () => {
    const res = createResponse();

    handler({ method: "GET", query: { resource: "products", id: "1" } }, res);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe("1");
  });

  it("does not claim persistence for write operations", () => {
    const res = createResponse();

    handler({ method: "POST", query: { resource: "products" } }, res);

    expect(res.statusCode).toBe(405);
    expect(res.body.error).toMatch(/read-only/i);
  });
});
