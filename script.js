
const button = document.getElementById("btn");
const jokecontainer = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

const getjoke= () => {

    fetch(url)
    .then(data => data.json())
    .then(item => {jokecontainer.textContent= `${item.joke}`});
}
button.addEventListener("click",getjoke);
getjoke();
