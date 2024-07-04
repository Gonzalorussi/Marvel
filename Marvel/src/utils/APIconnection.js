const API = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=03f40b98fbcfc98e13bf46e48a93c89e&hash=bd49779228355e83f9cc484fd64b28f6";

export const getUrl = () => {
    return fetch(API, {
        params:{
            "apikey":"03f40b98fbcfc98e13bf46e48a93c89e",
            "ts":"1",
            "hash":"bd49779228355e83f9cc484fd64b28f6"
        }
        
    }).then((results) => results.json());
};

getUrl().then((data) => {
    setCharacters(data);
});