import { describe, expect, test } from "bun:test";
import { cubeConundrumPartOne, cubeConundrumPartTwo } from "./cube-conundrum";

const example = Bun.file("src/day-02/example.txt");
const input = Bun.file("src/day-02/input.txt");

const content_input = await input.text();
const content_example = await example.text();

type maxCountType = {
  [key: string]: number;
};

const maxCount: maxCountType = {
  red: 12,
  green: 13,
  blue: 14,
};

describe("Day 02, cube conundrum", () => {
  describe("Part One", () => {
    test("it should return 8, example", () => {
      const result = cubeConundrumPartOne(content_example);
      expect(result).toEqual(8);
    });
    test("it should return 2716, input", () => {
      const result = cubeConundrumPartOne(content_input);
      expect(result).toEqual(2716);
    });
  });

  describe("Part Two", () => {
    test("it should return 2286, example", () => {
      const result = cubeConundrumPartTwo(content_example);
      expect(result).toEqual(2286);
    });
    test("it should return 2716, input", () => {
      const result = cubeConundrumPartTwo(content_input);
      expect(result).toEqual(72227);
    });
  });
});
