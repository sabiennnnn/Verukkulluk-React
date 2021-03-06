
export default class API {

    static fetchRecipes = (url) => new Promise ( ( resolve, reject ) => {

        fetch(url) 
        .then(response => response.json())
        .then(result => {
            resolve(result); 
        })
        .catch(error => { 
            reject(error)
        }); 
    });
}