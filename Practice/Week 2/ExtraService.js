
async function getData() {
    const response = await fetch('http://localhost:3000/math', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "value": "10"
        })
    })
    const data = await response.json();
    return data;
}

getData().then(res => console.log(res));

