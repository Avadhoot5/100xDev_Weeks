

let sendObj = {
    method: "POST",
    body: JSON.stringify({
        counter : 10
    }),
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch("http://localhost:3001/sum", sendObj)
    .then(res => res.json()).then(value => console.log(value)).catch(error => console.log('Error', error));


// then((res) => {
//     console.log(res);
//     if (!res.ok) {
//         throw new Error("network response not okay");
//     } else {
//         return res.json();
//     }}).then((value) => console.log(value)).catch(error => console.log('Error:', error));

// let sendObj = {
//     method: "POST",
//     body: JSON.stringify({
//         counter: 101 // Set the counter value here
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// };

// fetch("http://localhost:3001/sum", sendObj)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return res.json();
//     })
//     .then(value => console.log(value))
//     .catch(error => console.error('Error:', error));


 