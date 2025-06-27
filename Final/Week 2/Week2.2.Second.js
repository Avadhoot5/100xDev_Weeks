// calling the https server with this code.


let sendObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "counter": 10
    }),
}

const url = 'http://localhost:3000/sum';

fetch(url, sendObj)
    .then(response => response.json())
    .then(data => console.log(data));

