let movieElement = document.querySelector(".moviemain");

let getAllMovieList = async (title = "") => {
  let apiUrl;

  if (title === "") {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
  } else {
    apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`;
  }

  let data = await fetch(apiUrl);

  let finaData = await data.json();

  console.log(finaData);

  let { results } = finaData;

  movieItems = "";

  results.forEach((items) => {
    let {
      original_title,
      poster_path,
      title,
      popularity,
      overview,
      release_date,
    } = items;

    movieItems += ` <div class="movieitems">
                <img src="https://image.tmdb.org/t/p/w1280${poster_path}" alt="">
                <div class="heading">
                    <h4>${title}</h4>
                    <p>${release_date}</p>
                </div>
                <span>popularity  &nbsp${popularity}</span>
                <div class="overlaye">${overview}</div>
            </div>`;
  });

  movieElement.innerHTML = movieItems;
};

getAllMovieList();

let inputElement = document.querySelector("#inputId");

inputElement.addEventListener("keyup", () => {
  getAllMovieList(inputElement.value);
});
