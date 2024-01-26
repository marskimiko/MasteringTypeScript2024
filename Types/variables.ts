// let movieTitle: string = "Amadeus";
// movieTitle = "Arrival";
// movieTitle = 9;


// let numCatLives: number = 9;
// numCatLives += 1;
// numCatLives = "Zero"

// let gameOver: boolean = false;
// gameOver = true;
// gameOver = "true";


// Type Inference
let tvShow = "Greys Anatomy";
tvShow = "The Other Two";
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = "asd";

// the any type
let thing: any = "hello";
thing: 1;
thing = false;
thing()
thing.toUpperCase()

// delayed initialization & implicit any
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]
// in this situation typescript infers foundMovie type as 'any'
// let foundMovie;
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
// foundMovie();
// foundMovie = 1;
// foundMovie.asdasfasfk();