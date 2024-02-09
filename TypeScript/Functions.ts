// Return Type
// The type of the value returned by the function can be explicitly defined.

function addTwo(num: number): number {
  return num + 2;
  //   return "hey";
}
addTwo(5);

function getlower(val: string) {
  return val.toLowerCase();
}
getlower("Wappnet");

function Signup(
  name: string,
  email: string,
  password: number,
  ispaid: boolean
) {}
Signup("Ved", "ved23@gmail.com", 123, false);

// function with defalut params
const loginUser = (name: string, email: string, ispaid: boolean = false) => {};
loginUser("ved", "v@v.com");

const heros = ["ironman", "thor", "captain"];
heros.map((hero): string => {
  return `heros are ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
