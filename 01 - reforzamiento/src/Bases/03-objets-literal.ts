interface Person{

    firstName: string;
    lastName: string;
    age: number;
    addres:{
        City: string,
        CodePostal: string,
    },

}

const ironman: Person = {
    firstName : "Tony",
    lastName: "Stark",
    age: 45,
    addres:{
        City: 'Íquique',
        CodePostal: "ABC1234",
    },
};

console.log(ironman); 

/*const spiderman = { ...ironman }

spiderman.firstName = 'Kaylin';
spiderman.lastName = 'Velez';

console.log(ironman, spiderman)*/