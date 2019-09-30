
let movieId;
let movie;

const xhr = new XMLHttpRequest();

function xhrLoader(){
  const apiEndPoint="https://api.themoviedb.org/3/movie/now_playing?api_key=2d15418fcdee6b313ec65dde5a5ca25d&language=en-US&page=1";

  xhr.open("GET", apiEndPoint);

  xhr.send();

  xhr.addEventListener("readystatechange",getMovie)
};


function getMovie(){

  if(xhr.readyState==4){
    
    movie = JSON.parse(xhr.responseText);

    for (let i=0; i< movie.results.length; i++) {

      let movieContainer = document.createElement("div");
  
      container.appendChild(movieContainer);

      let img = document.createElement("img");
      img.setAttribute("class","movieItem");
      img.setAttribute("id",`${movie.results[i].id}`);
      img.setAttribute("src", "http://image.tmdb.org/t/p/w185/"+`${movie.results[i].poster_path}`+"");

      movieContainer.appendChild(img);

      let title = document.createElement("h1");
      title.innerHTML = `${movie.results[i].title}`;
      movieContainer.appendChild(title);

      let review = document.createElement("section");
      review.innerHTML = `Rating: ${movie.results[i].vote_average}`;
      movieContainer.appendChild(review);

      let dateReleased = document.createElement("section");
      dateReleased.innerHTML = `Date Released: ${movie.results[i].release_date}`;
      movieContainer.appendChild(dateReleased);

      let synopsis = document.createElement("section");
      synopsis.innerHTML = `Synopsis: ${movie.results[i].overview}`;
      movieContainer.appendChild(synopsis);
      }
}
}

document.addEventListener("click", onItemClick);

function onItemClick(e){

    if(e.target.classList.contains("movieItem")){
      
      for (let j = 0; j < movie.results.length; j++) {
        if (e.target.id == movie.results[j].id) {

          sessionStorage.setItem("item", JSON.stringify(movie.results[j]));

          window.open("html/movie.html");

        }
      }
    }
}


window.onload = xhrLoader();