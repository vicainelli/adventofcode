export const transformInputIntoArrays = (input: string): number[][] => {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map(Number));
};

function isSequence(arr: number[]) {
  if (arr.length <= 1) return true;

  const isAscending = arr[1] > arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (isAscending && arr[i] <= arr[i - 1]) return false;
    if (!isAscending && arr[i] >= arr[i - 1]) return false;
  }

  return true;
}

const hasGapGreaterThanThree = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > 3) {
      return true;
    }
  }
  return false;
};

export const isReportSafe = (report: number[]): boolean => {
  if (hasGapGreaterThanThree(report)) return false;
  if (!isSequence(report)) return false;
  return true;
};

export const day_2_part_1 = (input: string): number => {
  let safeReports = 0;

  const reports = transformInputIntoArrays(input);

  reports.map((report) => {
    if (isReportSafe(report)) {
      safeReports += 1;
    }
  });

  return safeReports;
};
