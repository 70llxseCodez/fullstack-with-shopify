// import { request } from "express";
import supertest from "supertest";
import { app } from "../index";
import { describe, expect, test } from "@jest/globals";

describe("GET DATA", () => {
  test("check status", async () => {
    const res = await supertest(app).get("/api/products");
    expect(res.statusCode).toBe(200);
  });
  test("check data for not null", async () => {
    const res = await supertest(app).get("/api/products");
    expect(res.body).not.toBe(null);
  });
});
