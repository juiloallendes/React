import { heroes, Owner, type Hero } from "./data/heroes.data";

export const getHeroByOwner = (owner: Owner): Hero[] => {
  return heroes.filter(hero => hero.owner === owner);
};



//const getHeroById = (id: number): Hero | undefined => {

    //const hero = heroes.find( (hero) => {
        //return hero.id === id;
    //});

    //if (!hero) {
        //throw new Error(´No existe un hero con el id ${id}´);
    //}

    //return hero

//}

//console.log(getHeroById(5))
