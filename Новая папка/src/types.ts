export {};

let str: string = "TypeScript";
let num: number = 2024;
let bool: boolean = true;
let bigIntValue: bigint = 123n;
let sym: symbol = Symbol("id");

let inferred = "строка";

let maybeNull: string | null = null;
let maybeUndefined: number | undefined = undefined;

let id: string | number = "user123";

enum Status {
  Pending,
  InProgress,
  Done
}
let taskStatus: Status = Status.InProgress;

let someValue: any = "this is a string";
let strLength1 = (someValue as string).length;
let strLength2 = (<string>someValue).length;
let val: unknown = "123";
let strVal: string = val as string;
let numVal: number = +(<string>val);
let boolVal: boolean = Boolean(val);