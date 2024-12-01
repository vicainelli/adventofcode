import { describe, expect, test } from "bun:test";
import { getLastDigit } from "./getLastDigit";

describe("utils :: getLastDigit", () => {
  test.each([
    ["two1nine", 9],
    ["eightwothree", 3],
    ["7pqrstsixteen", 6],
    ["4nineeightseven2", 2],
    ["three1sk4hnine", 9],
    ["6lsgzmjtjrseven8cnbnpgd", 8],
    ["three1sk4hnine", 9],
    ["sixmqhg5tvbvlhtzxgpfqlzone9", 9],
    ["fljgbjmccvpz67one", 1],
    ["5six3four9nine8", 8],
    ["mtdsgtwoxdxgc898sevenvml", 7],
    ["4xxbgkksppdtwo37", 7],
    ["67sixflmzrzxtwoqnkgskpcgpdmsh", 2],
    ["9hxfxqjn1twoqgkcjdgbjr3", 3],
    ["fourbsqr7bktkbqbdlpfour", 4],
  ])("it should return %s when given %d", (input, expected) => {
    expect(getLastDigit(input)).toBe(expected);
  });
});
