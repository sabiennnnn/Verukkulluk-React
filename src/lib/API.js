
export default class API {

    static fetchData = (url) => new Promise ( ( resolve, reject ) => {

        fetch(url) 
        .then(response => response.json())
        .then(data => {
            resolve(data); 
        })
        .catch(error => { 
            reject(error)
        }); 
    });
}