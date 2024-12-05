import { describe, it, expect } from "bun:test";
import {
  day_2_part_1,
  day_2_part_2,
  isReportSafe,
  transformInputIntoArrays,
  removeFirstNonSequential,
} from "./day-2-red-nosed-reports";

const fileTest = Bun.file("./src/day-2-red-nosed-reports.input.test.txt");
const contentTest = await fileTest.text();

const file = Bun.file("./src/day-2-red-nosed-reports.input.txt");
const content = await file.text();

describe("isReportSafe", () => {
  it("should return true/Safe when giving 7 6 4 2 1", () => {
    // because the levels are all decreasing by 1 or 2.
    const result = isReportSafe([7, 6, 4, 2, 1]);
    expect(result).toBe(true);
  });
  it("should return false/Unsafe when giving 1 2 7 8 9", () => {
    // because 2 7 is an increase of 5.
    const result = isReportSafe([1, 2, 7, 8, 9]);
    expect(result).toBe(false);
  });
  it("should return false/Unsafe when giving 9 7 6 2 1", () => {
    // because 6 2 is a decrease of 4.
    const result = isReportSafe([9, 7, 6, 2, 1]);
    expect(result).toBe(false);
  });
  it("should return false/Unsafe when giving 1 3 2 4 5", () => {
    // because 1 3 is increasing but 3 2 is decreasing.
    const result = isReportSafe([1, 3, 2, 4, 5]);
    expect(result).toBe(false);
  });
  it("should return false/Unsafe when giving 8 6 4 4 1", () => {
    // because 4 4 is neither an increase or a decrease.
    const result = isReportSafe([8, 6, 4, 4, 1]);
    expect(result).toBe(false);
  });
  it("should return false/Safe when giving 1 3 6 7 9", () => {
    // because the levels are all increasing by 1, 2, or 3.
    const result = isReportSafe([1, 3, 6, 7, 9]);
    expect(result).toBe(true);
  });
});

describe("transformInputIntoArrays", () => {
  it("test input", () => {
    const result = transformInputIntoArrays(`101 8 7`);
    const expected = [[101, 8, 7]];
    expect(result).toEqual(expected);
  });
  it("text input as an array of numbers", () => {
    const result = transformInputIntoArrays(contentTest);
    const expected = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];
    expect(expected).toEqual(result);
  });
});

describe("removeFirstNonSequential", () => {
  it("return [7, 6, 4, 2, 1] for [7, 6, 4, 2, 1]", () => {
    const result = removeFirstNonSequential([7, 6, 4, 2, 1]);
    const expected = [7, 6, 4, 2, 1];
    expect(result).toEqual(expected);
  });
  it("return [1, 2, 7, 8, 9] for [1, 2, 7, 8, 9]", () => {
    const result = removeFirstNonSequential([1, 2, 7, 8, 9]);
    const expected = [1, 2, 7, 8, 9];
    expect(result).toEqual(expected);
  });
  it("return [9, 7, 6, 2, 1] for [9, 7, 6, 2, 1]", () => {
    const result = removeFirstNonSequential([9, 7, 6, 2, 1]);
    const expected = [9, 7, 6, 2, 1];
    expect(result).toEqual(expected);
  });
  it("return [1, 2, 4, 5] for [1, 3, 2, 4, 5]", () => {
    const result = removeFirstNonSequential([1, 3, 2, 4, 5]);
    const expected = [1, 2, 4, 5];
    expect(result).toEqual(expected);
  });
  it("return [8, 6, 4, 1] for [8, 6, 4, 4, 1]", () => {
    const result = removeFirstNonSequential([8, 6, 4, 4, 1]);
    const expected = [8, 6, 4, 1];
    expect(result).toEqual(expected);
  });
  it("return [1, 3, 6, 7, 9] for [1, 3, 6, 7, 9]", () => {
    const result = removeFirstNonSequential([1, 3, 6, 7, 9]);
    const expected = [1, 3, 6, 7, 9];
    expect(result).toEqual(expected);
  });
  it.skip("return [ 2, 4, 6, 9, 10] for [ 2, 4, 6, 9, 10, 9 ]", () => {
    const result = removeFirstNonSequential([2, 4, 6, 9, 10, 9]);
    const expected = [2, 4, 6, 9, 10];
    expect(result).toEqual(expected);
  });
});

describe("Day 2: Red-Nosed Reports", () => {
  describe("part 1", () => {
    it("should return the correct amount of report from the test file", () => {
      const result = day_2_part_1(contentTest);
      const expected = 2;
      expect(result).toBe(expected);
      expect(typeof contentTest).toBe("string");
    });
    it("should return the correct amount of report from the input", () => {
      const result = day_2_part_1(content);
      const expected = 287;
      expect(result).toBe(expected);
      expect(typeof contentTest).toBe("string");
    });
  });
  describe("part 2", () => {
    it("should return the correct amount of report from the test file", () => {
      const result = day_2_part_2(contentTest);
      const expected = 4;
      expect(result).toBe(expected);
      expect(typeof contentTest).toBe("string");
    });
    it.skip("should return the correct amount of report from the file", () => {
      const result = day_2_part_2(content);
      const expected = 307;
      expect(result).toBe(expected);
      expect(typeof contentTest).toBe("string");
    });
  });
});
