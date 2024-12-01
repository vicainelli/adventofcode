import { describe, expect, test } from "bun:test";
import { getFirstDigit } from "./getFirstDigit";

describe("utils :: getFirstDigit", () => {
  test.each([
    ["two1nine", 2],
    ["eightwothree", 8],
    ["sixteen7pqrst", 1],
    ["4nineeightseven2", 4],
    ["three1sk4hnine", 3],
    ["6lsgzmjtjrseven8cnbnpgd", 6],
    ["three1sk4hnine", 3],
    ["sixmqhg5tvbvlhtzxgpfqlzone9", 6],
    ["fljgbjmccvpz67one", 6],
    ["5six3four9nine8", 5],
    ["mtdsgtwoxdxgc898sevenvml", 2],
    ["4xxbgkksppdtwo37", 4],
    ["67sixflmzrzxtwoqnkgskpcgpdmsh", 6],
    ["9hxfxqjn1twoqgkcjdgbjr3", 9],
    ["fourbsqr7bktkbqbdlpfour", 4],
  ])("it should return %s when given %d", (input, expected) => {
    expect(getFirstDigit(input)).toBe(expected);
  });
});
