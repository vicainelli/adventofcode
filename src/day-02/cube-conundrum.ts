type maxCountType = {
  [key: string]: number;
};

const maxCount: maxCountType = {
  red: 12,
  green: 13,
  blue: 14,
};

export function cubeConundrumPartOne(content: string): number {
  // Split the content into lines
  const lines = content.trim().split("\n");

  // Process each line
  return (
    lines
      .map((line) => {
        // Split the line into sets
        const sets = line.split(": ")[1].split("; ");

        // Check if all pulls in a set are valid
        const areAllPullsValid = sets.map((set) => {
          const pulls = set.split(", ");

          // Check if a pull is valid
          return pulls.every((pull) => {
            const [count, color] = pull.split(" ");
            return maxCount[color] >= Number(count);
          });
        });

        // Check if all sets are valid
        return areAllPullsValid.every((p) => p);
      })
      // Sum up the results
      .reduce((sum, result, index) => {
        return result ? sum + (index + 1) : sum;
      }, 0)
  );
}
