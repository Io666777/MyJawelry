export {};

const matrix: ReadonlyArray<ReadonlyArray<number>> = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log("Matrix:");
matrix.forEach(row => console.log(row.join("\t")));

let fruits: string[] = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);
console.log("Length:", fruits.length);

let index = 1;
let newValue = "blueberry";
fruits[index] = newValue;

const [first, second, ...rest] = fruits;
console.log("First:", first, "Second:", second, "Rest:", rest);

let jagged: number[][] = [
  [1.1, 2.2],
  [3.3, 4.4, 5.5],
  [6.6, 7.7, 8.8, 9.9]
];
console.log("Jagged array:");
jagged.forEach((row, i) => console.log(`Row ${i + 1}:`, row.join(" ")));