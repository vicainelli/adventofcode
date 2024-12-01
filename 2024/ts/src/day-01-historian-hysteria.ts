function transformInputIntoArrays(input: string): [never[], never[]] {
  return input
    .trim()
    .split("\n")
    .map((line) => line.split(/\s+/))
    .reduce(
      (acc, [val1, val2]) => {
        acc[0].push(Number(val1));
        acc[1].push(Number(val2));
        return acc;
      },
      [[], []],
    );
}

export function findDistance(input: string): Number {
  const [column_a, column_b] = transformInputIntoArrays(input);

  const sorted_a = column_a.sort();
  const sorted_b = column_b.sort();

  // find distance from A to B
  const dist_arr = sorted_a.map((a, i) => Math.abs(a - sorted_b[i]));

  const sum_of_arr = dist_arr.reduce((acc, curr) => acc + curr, 0);

  return sum_of_arr;
}

export function findDistancePart_2(input: string): Number {
  const [column_a, column_b] = transformInputIntoArrays(input);

  return column_a
    .map((y) => column_b.filter((x) => x === y).length * y)
    .reduce((a, b) => a + b, 0);
}
