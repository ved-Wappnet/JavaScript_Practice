interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail : () => string
  startTrail(): string;
  getCoupon(couponName : string) : number
}

let ved: User = { dbId: 25, email: "v@v.com", userId: 2306,
  startTrail: () => {
    return "Wappnet";
  },
  getCoupon:(name : "Ved07")=>{
    return 10
  }
};
console.log(ved);

export {};
