const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const table = input.split("\n").map((row) => row.split(""));
const rows = table.length;
const cols = table[0]?.length;
const word = "XMAS".split("");
let count = 0;

// Part 1
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < rows; j++) {
    // Find horizontal
    const horizon = (idx: number) => table?.[i]?.[j + idx];
    const horizonInv = (idx: number) => table?.[i]?.[j - idx];

    if (word.every((char, idx) => char === horizon(idx))) count++;
    if (word.every((char, idx) => char === horizonInv(idx))) count++;

    // Find vertical
    const vert = (idx: number) => table?.[i + idx]?.[j];
    const vertInv = (idx: number) => table?.[i - idx]?.[j];

    if (word.every((char, idx) => char === vert(idx))) count++;
    if (word.every((char, idx) => char === vertInv(idx))) count++;

    // Find diagonal
    const diagTopLeft = (idx: number) => table?.[i + idx]?.[j + idx];
    const diagTopRight = (idx: number) => table?.[i + idx]?.[j - idx];
    const diagBottomLeft = (idx: number) => table?.[i - idx]?.[j + idx];
    const diagBottomRight = (idx: number) => table?.[i - idx]?.[j - idx];

    if (word.every((char, idx) => char === diagTopLeft(idx))) count++;
    if (word.every((char, idx) => char === diagTopRight(idx))) count++;
    if (word.every((char, idx) => char === diagBottomLeft(idx))) count++;
    if (word.every((char, idx) => char === diagBottomRight(idx))) count++;
  }
}

console.log("part 1", count);
