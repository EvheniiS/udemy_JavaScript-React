
let personalMoviesDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMoviesDB.count = +prompt("How many movies do you watched  this summer?", " ");

        while(personalMoviesDB.count == ' ' || numberOfFilms == null || isNaN(numberOfFilms)) { 
            personalMoviesDB.count = +prompt("How much movies do you watched  this summer?", " ");
        }   
    },
    rememberMyFilms: () => { 
        for( let i = 0; i < 2; i++) {
            const a = prompt (('What is last movie that you watched?', " ")).trim(), // Trim() remove all spaces from str
                  b = prompt ('What is your score for this movie?', " " );
            if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMoviesDB.movies[a] = b 
                console.log('Done');
            } else { 
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel:() => {

        if (personalMoviesDB.count < 10) {
            console.log("You should watch more movies")
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("You have some time for movies :) ");
        } else if (personalMoviesDB.count >= 30) { 
            console.log("YOU ARE BIG FAN OF MOVIES!")
        } else {
            console.log('error')
        }
    },
    showMyDB: () => (hidden){ 
        if(!hidden) {
            console.log(personalMoviesDB)
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMoviesDB.privat){
            personalMoviesDB.privat = false;
        }else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1;i <= 3; i++ ) {
            let genre = prompt(`Your favorite genre under number ${i}`);

            if( genre ==='' || genre == null) {
                console.log('Wrong data or empty data')
                i--;
            } else { 
                personalMoviesDB.genres[i - 1] = genre; 
            }
        }
        personalMoviesDB.genres.forEach((item, i) =>{ 
            console.log(`Your favorite genre is ${i + 1 }- is ${item} `)
        } )
     }
};






const lastMovie = prompt('What is last movie that you watched?', " "),
      movieScore = prompt('What is your score for this movie?', " " ),
      lastMovie2 = prompt('What is last movie that you watched?', " "),
      movieScore2 = prompt('What is your score for this movie?', " " );


personalMoviesDB.movies[lastMovie] = movieScore;
personalMoviesDB.movies[lastMovie2] = movieScore2;

console.log("🚀 ~ file: numberOfFilms.js:21 ~ personalMoviesDB:", personalMoviesDB)
*/

