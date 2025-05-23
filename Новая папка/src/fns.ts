export {};

function analyzeData(numbers: number[], text: string): [number, number, number, string] {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const firstLetter = text.charAt(0);
  return [max, min, sum, firstLetter];
}

const result = analyzeData([5, 3, 9, 1], "TypeScript");
console.log("Result:", result);