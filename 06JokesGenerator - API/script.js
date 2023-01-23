let btn = document.querySelector("#jokeBtn");
const joke = document.getElementById("joke");

const getJoke = async () => {
  joke.innerHTML = "Loading.....";
  let response = await fetch(
    `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single`
  );
  let data = await response.json();
  joke.innerHTML = data.joke;
};

btn.addEventListener("click", getJoke);
