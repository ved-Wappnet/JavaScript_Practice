// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

let score: number | string = 35;
score = 45;
score = "45";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let ved: User | Admin = { name: "ved", id: 335 };
ved = { username: "ved07", id: 335 };

function getdb(id: number | string) {
  console.log(`db id is ${id}`);
}
getdb(3);
getdb("3");

function getdbid(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array

let data: number[] = [1, 23, 4, 8];
let data2: string[] = ["c", "5", "g"];
let data3: (string | number | boolean)[] = [4, 8, "5", "g", true];

export {};
