import type { GiphyRandomResponse } from "./data/giphy.response";

const API_Key = 'PQkF3eLnqguVTUJDjYLRdg6wGn7Lshwh'

const myRequiest = fetch( 
    `https://api.giphy.com/v1/gifs/random?api_key=${ API_Key } `
)

const createImageDOM = (url:string) =>{
     const imgElement = document.createElement('img');
     imgElement.src = url;
     document.body.append(imgElement)
}

myRequiest
.then( (response) =>  response.json())
.then(({ data }:GiphyRandomResponse) => {
     const imageUrl = data.images.original.url
     createImageDOM(imageUrl)
})
.catch( err => {
     console.error(err)
})