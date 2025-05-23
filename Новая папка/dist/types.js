"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "TypeScript";
let num = 2024;
let bool = true;
let bigIntValue = 123n;
let sym = Symbol("id");
let inferred = "строка";
let maybeNull = null;
let maybeUndefined = undefined;
let id = "user123";
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
let taskStatus = Status.InProgress;
let someValue = "this is a string";
let strLength1 = someValue.length;
let strLength2 = someValue.length;
let val = "123";
let strVal = val;
let numVal = +val;
let boolVal = Boolean(val);
//# sourceMappingURL=types.js.map