
const chracarterName = ['Goku', 'vegeta', 'Trunks' ];

 const [, , p3] = chracarterName

console.log({ p3 })

const returnArrayFn = () =>{

    return ['ABC', 123] as const

}

const [letter, numbers] = returnArrayFn()

console.log(numbers + 100)

console.log(letter + 100)


const useState = (nombre:string) => {
    return [
    nombre, 
    (name:string) =>{
        console.log(name)
    },
] as const
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"