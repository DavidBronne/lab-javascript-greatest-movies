/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let sortedMovies = [...arr];
    sortedMovies.sort(function (a, b) {
        if (a.year < b.year) {
            return -1
        } else if (a.year > b.year) {
            return 1
        } else {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        }
    });
    return sortedMovies
};

//console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieArray, director, type) {
    const filterResults = movieArray.filter(function(movie) {
        return movie.director === director && movie.genre.indexOf(type) >= 0 // optional: .includes
    });
    //console.log(filterResults);
    return filterResults.length
}

//console.log(howManyMovies(movies, "Steven Spielberg", "Drama"));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray) {
    let sortedMovies = [...movieArray];
    sortedMovies.sort(function (a, b) {
            if (a.title > b.title) {
                return -1
            } else if (a.title < b.title) {
                return 1
            } else {
                return 0
            }
        }
    );
    let sortedSlicedMovies = sortedMovies.slice(0,20);

    const mappedArray = sortedSlicedMovies.map(function(movie){
        const title = movie.title
        return title
    });
    
    return mappedArray
    
} 

//console.log(orderAlphabetically(movies))

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length > 0) {
        let sumRating = arr.reduce((rating, movie) => {
            if (movie.rate) {
                return rating + movie.rate
            } else {
                return rating
            }
            },0);
        return Math.round(sumRating / arr.length * 100) / 100
    } else {
        return 0
    }
};

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    //filter all Drama movies
    const filterResults = arr.filter(function(movie) {
        return movie.genre.indexOf("Drama") >= 0 // optional: .includes
    });
    //get average
    const rating = ratesAverage(filterResults);
    return rating
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    const moviesMinDuration = arr.map(function(movie){
        let durationSplit = movie.duration.split(" ");
        //console.log(durationSplit);
        let hours = durationSplit[0].replace("h","");
        let newDuration;
        let minutes;
        if (durationSplit[1]){
            minutes = durationSplit[1].replace("min","");
            newDuration = parseInt(hours)*60 + parseInt(minutes);
        } else if (durationSplit[0] && durationSplit[0].includes('min')) {
            newDuration = parseInt(durationSplit[0].replace("min",""));
        } else {
            newDuration = parseInt(hours)*60
        }
        
        movie.duration = newDuration;
        console.log((typeof newDuration) + newDuration);
        return movie
    })
    return moviesMinDuration
}

//console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate average