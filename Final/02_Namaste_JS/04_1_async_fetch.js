// githubAPI

const URL = 'https://api.github.com/users/avadhoot5';

async function getData() {
    try {
        const data = await fetch(URL);
        console.log(data);
        const value = await data.json();
        console.log(value);
    } catch (err) {
        console.log(err);
    }
}


getData();



