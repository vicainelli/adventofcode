import { describe, it, expect } from "bun:test";

export const day_3_part_1 = (input: string): number => {
  const regex = /(?:\w*mul)\((\d+),(\d+)\)/g;

  const matches = [...input.matchAll(regex)].map((match) => [
    Number(match[1]),
    Number(match[2]),
  ]);

  return matches.reduce((sum, pair) => sum + pair[0] * pair[1], 0);
};

const testInput =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const file = Bun.file("./src/day-3-mull-it-over-input.txt");
const content = await file.text();

describe("Day 3: Mull It Over", () => {
  describe("Part 1", () => {
    it("should return 161", () => {
      const result = day_3_part_1(testInput);
      const expected = 161;
      expect(result).toEqual(expected);
    });
    it("should return 000", () => {
      const result = day_3_part_1(content);
      const expected = 171183089;
      expect(result).toEqual(expected);
    });
  });
});
