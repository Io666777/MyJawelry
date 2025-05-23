export {};

type Person = { name: string; age: number; };

enum Role { Admin, User, Guest }

let personTuple: [number, string, boolean, Person, Role] = [
  42,
  "Alice",
  true,
  { name: "Bob", age: 30 },
  Role.Admin
];

console.log("Full tuple:", personTuple);
console.log("1st:", personTuple[0], "3rd:", personTuple[2], "4th:", personTuple[3]);

const [tNum, tStr, tBool, tObj, tRole] = personTuple;

const readonlyTuple: readonly [number, string, boolean, Person, Role] = [...personTuple];

console.log("Tuples equal:", JSON.stringify(personTuple) === JSON.stringify(readonlyTuple));

let optionalTuple: [string, number?] = ["hello"];