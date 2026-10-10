import type { GiphyRandomResponse } from "./data/giphy.response";

const API_Key = 'PQkF3eLnqguVTUJDjYLRdg6wGn7Lshwh'



const createImageDOM = (url:string) =>{
     const imgElement = document.createElement('img');
     imgElement.src = url;
     document.body.append(imgElement)
}


const getRandomUrl = async () => {

    const response = await fetch( 
    `https://api.giphy.com/v1/gifs/random?api_key=${ API_Key } `
);

    const { data }: GiphyRandomResponse =  await response.json()

    return data.images.original.url

}


getRandomUrl().then(createImageDOM)