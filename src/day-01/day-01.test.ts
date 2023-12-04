import { describe, expect, test } from "bun:test";
import { trebuchet } from "./";

describe("Day 01, trebuchet", () => {
  describe("Part 1, should form a single two-digit number by combining the first digit and the last digit in that order", () => {
    test("one string", () => {
      const result = trebuchet(`1abc2`);
      expect(result).toEqual(12);
    });

    test("two strings", () => {
      const result = trebuchet(`1abc2
      pqr3stu8vwx`);
      expect(result).toEqual(50);
    });

    test("four strings", () => {
      const result = trebuchet(`1abc2
      pqr3stu8vwx
      a1b2c3d4e5f
      treb7uchet`);
      expect(result).toEqual(142);
    });
  });
});
