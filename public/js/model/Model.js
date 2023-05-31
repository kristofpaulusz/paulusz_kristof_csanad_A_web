export default class Model {
    constructor() {}
    get(vegpont, callback) {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data =>
                callback(data)
            )
            
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}