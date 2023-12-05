import { SPELLED_NUMBERS, NUMBER_WORDS } from "../constants";

const SPELLED_NUMBERS_REVERSED = SPELLED_NUMBERS.sort(
  (a, b) => b.length - a.length
);

export function getLastDigit(text: string): string | number {
  // * if the last digit in the text is a number, return it
  if (!isNaN(Number(text[text.length - 1]))) {
    return Number(text[text.length - 1]);
  }

  // * if not, check if the string starts with one of the spelled numbers on the list
  for (const number of SPELLED_NUMBERS_REVERSED) {
    if (text.endsWith(number)) {
      // return the last digit of the digit, if 17, return 7
      return getLastDigit(NUMBER_WORDS[number].toString());
    }
  }

  // * if not, remove the last character and repeat the process
  return getLastDigit(text.substring(0, text.length - 1));
}
