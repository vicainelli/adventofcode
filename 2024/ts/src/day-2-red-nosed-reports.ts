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

// ------ PART 2

export function removeFirstNonSequential(arr) {
  if (arr.length <= 2) return arr;

  // Determine if sequence is ascending or descending
  const isAscending = arr[1] > arr[0];
  const result = [...arr];

  // Find first number that breaks the sequence
  for (let i = 1; i < arr.length - 1; i++) {
    if (isAscending) {
      // For ascending sequence, check current and next number
      if (result[i] > result[i + 1]) {
        result.splice(i, 1);
        break;
      }
    } else {
      // For descending sequence, check current and next number
      // Also remove if numbers are equal (not strictly descending)
      if (result[i] <= result[i + 1]) {
        result.splice(i, 1);
        break;
      }
    }
  }

  return result;
}

const removeConsecutiveDuplicates = (arr: number[]) =>
  arr.filter((num, index) => num !== arr[index - 1]);

// Check for consecutive duplicates
const hasConsecutiveDuplicates = (arr: number[]) => {
  return arr.some((num, index) => num === arr[index + 1]);
};

export const removingSingleBadLevel = (report: number[]): number[] => {
  // find first duplicate, remove one of and return the new array

  if (hasConsecutiveDuplicates(report))
    return removeConsecutiveDuplicates(report);

  return removeFirstNonSequential(report);
};

export const day_2_part_2 = (input: string): number => {
  let safeReports = 0;

  const reports = transformInputIntoArrays(input);

  reports.map((report) => {
    const changed_report = removingSingleBadLevel(report);

    if (isReportSafe(changed_report)) {
      safeReports += 1;
    }
  });

  return safeReports;
};
