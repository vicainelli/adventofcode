import { SPELLED_NUMBERS, NUMBER_WORDS } from "../constants";

const SPELLED_NUMBERS_REVERD = SPELLED_NUMBERS.sort(
  (a, b) => b.length - a.length
);

export function getFirstDigit(text: string): string | number {
  // * if the first digit in the text is a number, return it
  if (!isNaN(Number(text[0]))) {
    return Number(text[0]);
  }

  // * if not, check if the string starts with one of the spelled numbers on the list
  for (const number of SPELLED_NUMBERS_REVERD) {
    if (text.startsWith(number)) {
      return getFirstDigit(NUMBER_WORDS[number].toString());
    }
  }

  // * if not, remove the first character and repeat the process
  return getFirstDigit(text.substring(1));
}
