import { sayhello } from "./types"

export function hello(
    {firstName, LastName, age}: sayhello){
    
console.log(`Name ${firstName}`)
    //,,,
    if(LastName || age)
    {
        console.log(`Last name${LastName} ${age}`)
    }
}