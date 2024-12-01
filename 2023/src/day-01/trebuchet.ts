import { getLastDigit, getFirstDigit } from "./utils";

export function trebuchet(txt: string): number {
  const lines = txt.split("\n").map((line) => line.replace(/\s/g, ""));

  const numbers = lines.map((line) => {

    const firstDigit = getFirstDigit(line);
    const lastDigit = getLastDigit(line);

    return Number(`${firstDigit}${lastDigit}`);
  });

  return numbers.reduce((acc, curr) => acc + curr, 0);
}