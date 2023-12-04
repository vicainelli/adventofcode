export function trebuchet(txt: string): number {
  // split the txt into an array of lines, and remove spaces
  const lines = txt.split("\n").map((line) => line.replace(/\s/g, ""));

  const numbers = lines.map((line) => {
    // split the line into an array of characters, if the charat is a NUMBER return it and stop the loop
    const firstDigit = line.split("").find((char) => !isNaN(Number(char)));
    const lastDigit = line
      .split("")
      .reverse()
      .find((char) => !isNaN(Number(char)));
    return Number(`${firstDigit}${lastDigit}`);
  });

  return numbers.reduce((acc, curr) => acc + curr, 0);
}
