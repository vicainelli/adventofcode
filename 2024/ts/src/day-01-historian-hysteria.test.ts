import { describe, it, expect } from "bun:test";
import { findDistance } from "./day-01-historian-hysteria";

const file = Bun.file("./src/day-01-historian-hysteria-input.txt");
const content = await file.text();

describe("Day 1: Historian Hysteria", async () => {
  it("should return the correct distance", () => {
    const result = findDistance(content);
    const expected = 11;
    expect(result).toBe(expected);
    expect(typeof content).toBe("string");
  });
});
