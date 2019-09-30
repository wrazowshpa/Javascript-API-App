let goBack = document.querySelector("#goBack");


goBack.addEventListener("click", goBackToHome);

function goBackToHome(){
	window.open("../index.html");
}

let movieDetailsContainer = document.createElement("div");
    movieDetails.appendChild(movieDetailsContainer);

let specificMovie = JSON.parse(sessionStorage.getItem("item"));

let id = parseInt(specificMovie.id);
let movieTrailerJ;

const xhr2 = new XMLHttpRequest();

function xhrLoader2(){

    const apiEndPoint2="https://api.themoviedb.org/3/movie/"+`${id}`+"/videos?api_key=2d15418fcdee6b313ec65dde5a5ca25d&language=en-US";

    xhr2.open("GET", apiEndPoint2);

    xhr2.send();

    xhr2.addEventListener("readystatechange",getMovieDetails)

}

function getMovieDetails(){
	
	if(xhr2.readyState==4){

    movie2 = JSON.parse(xhr2.responseText);

	let img = document.createElement("img");
	img.setAttribute("class","movieItem");
	img.setAttribute("id",`${specificMovie.id}`);
	img.setAttribute("src", "http://image.tmdb.org/t/p/w185/"+`${specificMovie.poster_path}`+"");

	movieDetailsContainer.appendChild(img);

	let trailer = document.createElement("iframe");
	trailer.setAttribute("src", "https://www.youtube.com/embed/"+`${movie2.results[0].key}`+"");
	movieDetailsContainer.appendChild(trailer);

	let title = document.createElement("h1");
	title.innerHTML = `${specificMovie.title}`;
	movieDetailsContainer.appendChild(title);

	let review = document.createElement("section");
	review.innerHTML = `Rating: ${specificMovie.vote_average}`;
	movieDetailsContainer.appendChild(review);

	let dateReleased = document.createElement("section");
	dateReleased.innerHTML = `Date Released: ${specificMovie.release_date}`;
	movieDetailsContainer.appendChild(dateReleased);

	let synopsis = document.createElement("section");
	synopsis.innerHTML = `Synopsis: ${specificMovie.overview}`;
	movieDetailsContainer.appendChild(synopsis);
}
}

window.onload = xhrLoader2();