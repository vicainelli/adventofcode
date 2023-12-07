import { describe, expect, test } from "bun:test";
import { trebuchet } from "./trebuchet";

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
  describe("Part 2, some of the digits are actually spelled out with letters", () => {
    test("it should return 29 when given 'two1nine'", () => {
      const result = trebuchet(`two1nine`);
      expect(result).toEqual(29);
    });

    test("it should return 83 when given 'eightwothree'", () => {
      const result = trebuchet(`eightwothree`);
      expect(result).toEqual(83);
    });

    test("it should return 13 when given 'abcone2threexyz'", () => {
      const result = trebuchet(`abcone2threexyz`);
      expect(result).toEqual(13);
    });

    test("two strings", () => {
      const result = trebuchet(`two1nine
      eightwothree
      7pqrstsixteen`);
      expect(result).toEqual(188);
    });

    test("all strings from example", () => {
      const result = trebuchet(`two1nine
          eightwothree
          abcone2threexyz
          xtwone3four
          4nineeightseven2
          zoneight234
          7pqrstsixteen`);
      expect(result).toEqual(281);
    });
  });
});
