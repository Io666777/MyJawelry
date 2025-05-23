"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log("Matrix:");
matrix.forEach(function (row) { return console.log(row.join("\t")); });
var fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);
console.log("Length:", fruits.length);
var index = 1;
var newValue = "blueberry";
fruits[index] = newValue;
var first = fruits[0], second = fruits[1], rest = fruits.slice(2);
console.log("First:", first, "Second:", second, "Rest:", rest);
var jagged = [
    [1.1, 2.2],
    [3.3, 4.4, 5.5],
    [6.6, 7.7, 8.8, 9.9]
];
console.log("Jagged array:");
jagged.forEach(function (row, i) { return console.log("Row ".concat(i + 1, ":"), row.join(" ")); });
