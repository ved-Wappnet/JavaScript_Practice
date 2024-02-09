type User = {
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean,
    credircard ?: number // ? mark is give to the optional
};  

let myuser:User = {
    _id : "123",
    name : "ved",
    email : "ved@.com",
    isActive : false
}

myuser.email = "v@v.com"
// myuser._id = "456" // it gives a error cause it assign to readonly