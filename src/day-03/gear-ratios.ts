const isSymbol = (str: string): boolean => {
  return str !== "."; // numbers touching numbers is not the case, so handling only `.`
};

const isNumber = (str: string): boolean => {
  return !Number.isNaN(parseInt(str));
};

const isGear = (str: string): boolean => {
  return str === "*";
};
export function gearRatioPartOne(content: string): number {
  const lines = content.trim().split("\n");

  const matrix = lines.map((line) => line.split(""));

  let total = 0;

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    let match;
    const pattern = /\d+/g;

    while ((match = pattern.exec(lines[lineIdx])) !== null) {
      const arround: boolean[] = [];

      // * Left
      // check if `lineIdx` or `match.index - 1` is negative
      if (
        lineIdx >= 0 &&
        match.index - 1 >= 0 &&
        matrix[lineIdx] &&
        matrix[lineIdx][match.index - 1]
      ) {
        const matrixLeft = matrix[lineIdx][match.index - 1];
        arround.push(isSymbol(matrixLeft)); // * left side
      }

      // * Right
      if (
        lineIdx >= 0 &&
        pattern.lastIndex >= 0 &&
        matrix[lineIdx] &&
        matrix[lineIdx][pattern.lastIndex]
      ) {
        const matrixRight = matrix[lineIdx][pattern.lastIndex];
        arround.push(isSymbol(matrixRight)); // * right side
      }

      for (let i = match.index - 1; i <= pattern.lastIndex; i++) {
        // * TOP ====================
        // * Check if:
        // * - lineIdx - 1 is NOT negative
        // * - i is NOT negative
        // * - matrix[lineIdx - 1] is valid
        // * - matrix[lineIdx - 1][i] is valid
        if (
          lineIdx - 1 >= 0 &&
          i >= 0 &&
          matrix[lineIdx - 1] &&
          matrix[lineIdx - 1][i]
        ) {
          const matrixTop = matrix[lineIdx - 1][i];
          arround.push(isSymbol(matrixTop));
        }

        // * BOTTOM ====================
        // check if lineIdx + 1 or i is negative, and is not bigger than the matrix length
        if (
          lineIdx + 1 >= 0 &&
          i >= 0 &&
          matrix[lineIdx + 1] &&
          matrix[lineIdx + 1][i]
        ) {
          const matrixBottom = matrix[lineIdx + 1][i];
          arround.push(isSymbol(matrixBottom));
        }
      }

      if (arround.includes(true)) {
        total += Number(match[0]);
      }
    }
  }

  return total;
}
