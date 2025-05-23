"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let personTuple = [
    42,
    "Alice",
    true,
    { name: "Bob", age: 30 },
    Role.Admin
];
console.log("Full tuple:", personTuple);
console.log("1st:", personTuple[0], "3rd:", personTuple[2], "4th:", personTuple[3]);
// Деструктуризация
const [tNum, tStr, tBool, tObj, tRole] = personTuple;
const readonlyTuple = [...personTuple];
console.log("Tuples equal:", JSON.stringify(personTuple) === JSON.stringify(readonlyTuple));
let optionalTuple = ["hello"];
//# sourceMappingURL=tuples.js.map