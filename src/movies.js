// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map((oneMovie)=>{
    return oneMovie.director;    
    });
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const filteredMovies = moviesArray.filter(function(eachMovie) {
    if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes ("Drama")) {
        return true
    }
   })
   return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
    return 0 }
    let average = moviesArray.reduce((a, b) => {
        if (b.score) {
            return a + b.score;
        } else {
            return a;
        }
    }, 0);
    return Number ((average /moviesArray.length).toFixed(2))
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesArr = moviesArray.filter(function(eachMovie) {
        return eachMovie.genre.includes("Drama")
        })
        return scoresAverage(dramaMoviesArr)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
        const sortedMovies = [...moviesArray];
        sortedMovies.sort((movie1, movie2) => {
            if (movie1.year!==movie2.year) {
                return movie1-year-movie2.year;
                } else {
                    return movie1.title.localeCompare(movie2.title);
                }
        });
    
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
