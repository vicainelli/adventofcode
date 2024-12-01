import { describe, it, expect } from "bun:test";
import { findDistance, findDistancePart_2 } from "./day-01-historian-hysteria";

const fileTest = Bun.file("./src/day-01-historian-hysteria-input.test.txt");
const contentTest = await fileTest.text();

const file = Bun.file("./src/day-01-historian-hysteria-input.txt");
const content = await file.text();

describe("Day 1: Historian Hysteria", () => {
  describe("part 1", () => {
    it("should return the correct distance with test file", () => {
      const result = findDistance(contentTest);
      const expected = 11;
      expect(result).toBe(expected);
      expect(typeof content).toBe("string");
    });
    it("should return the correct distance with real file", () => {
      const result = findDistance(content);
      const expected = 2192892;
      expect(result).toBe(expected);
      expect(typeof content).toBe("string");
    });
  });
  describe("part 2", () => {
    it("should return the correct distance with test file", () => {
      const result = findDistancePart_2(contentTest);
      const expected = 31;
      expect(result).toBe(expected);
      expect(typeof content).toBe("string");
    });
    it("should return the correct distance", () => {
      const result = findDistancePart_2(content);
      const expected = 22962826;
      expect(result).toBe(expected);
      expect(typeof content).toBe("string");
    });
  });
});
