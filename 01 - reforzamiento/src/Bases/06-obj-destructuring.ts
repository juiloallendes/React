const person = {
    name: 'Tony',
    age: 45,
    key: 'IronMan'
};

const { age,key,name: IronManName } = person;

console.log({ IronManName, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}


const useContext = ( { key, name, age, rank }: Hero ) => {

    return {
        keyname: key,
        user:{
            name:name,
            age:age
        },
        rank:rank
    };

}

const{
    rank,
    keyname,
    user, 
} = useContext(person);

const {name} = user
console.log( { rank, keyname, name } )
