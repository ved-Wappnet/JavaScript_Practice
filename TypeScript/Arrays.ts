const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const num: number[] = [1, 2, 3, 4];
num.push(7);

// another concept in Array

// Readonly : The readonly keyword can prevent arrays from being changed.

const name: readonly string[] = ["ved"];
// name.push("jack");
// Error: Property 'push' does not exist on type 'readonly string[]'.



export {};
