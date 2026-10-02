
function greet(name:string): string {
    return `hola ${name}`;
}

const greet2 = (name:string): string => `hola ${name}`;


const message = greet("Goku");
const message2 = greet2("Vegeta");

function getUSer() {
    return {
        uid: 'ABC - 123',
        username: 'El_Papi23'
    }
}
console.log(message, message2)


const user = getUSer()
console.log(user)

const getUSer2 = () => ({
    uid: 'Pepito jiji',
    username: 'Gengar'
})

console.log(getUSer2)

const myNumbers: number[] = [1,2,3,4,5]

myNumbers.forEach(function (value) {
    console.log({value});
})

myNumbers.forEach((value,index,arr) =>{
    console.log(value,index,arr)
})
