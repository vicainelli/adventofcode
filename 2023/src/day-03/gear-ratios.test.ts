import { describe, expect, test } from "bun:test";
import { gearRatioPartOne } from "./gear-ratios";

const example = Bun.file("src/day-03/example.txt");
const content_example = await example.text();

const input = Bun.file("src/day-03/input.txt");
const content_input = await input.text();

describe("Day 03, gear ratios", () => {
  describe("Part One", () => {
    test("it should return 4361, example", () => {
      const result = gearRatioPartOne(content_example);
      expect(result).toEqual(4361);
    });

    test("it should return 525119, input", () => {
      const result = gearRatioPartOne(content_input);
      expect(result).toEqual(525119);
    });
  });
});
