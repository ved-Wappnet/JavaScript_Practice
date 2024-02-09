// const user : (number|string)[] = ["ved",2] // used in union

let user: [string, boolean, number];

user = ["ved", true, 7];

type User1 = [number, string ,...any];

const newUSer: User1 = [7, "vedpanchal"];
newUSer[1] = "panchal";

newUSer.push(true)

export{}