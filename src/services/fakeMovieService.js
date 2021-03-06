import * as genresAPI  from './fakeGenreService';
const movies = [
    {
        _id: '1',
        title: 'Terminator',
        genre: { _id: '1a', name: 'Action'},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: '2018-01-03T19:04:28.809Z',
        liked: true
    },
    {
        _id: '2',
        title: 'Die Hard',
        genre: { _id: '1a', name: 'Action'},
        numberInStock: 5,
        dailyRentalRate: 2.5
    },
    {
        _id: '3',
        title: 'Get Out',
        genre: { _id: '3a', name: 'Thriller'},
        numberInStock: 8,
        dailyRentalRate: 3.5
    },
    {
        _id: '4',
        title: 'Trip to Italy',
        genre: { _id: '2a', name: 'Comedy'},
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: '5',
        title: 'Airplane',
        genre: { _id: '2a', name: 'Comedy'},
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: '6',
        title: 'Wedding Crashers',
        genre: { _id: '2a', name: 'Comedy'},
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: '7',
        title: 'Gone Girl',
        genre: { _id: '3a', name: 'Thriller'},
        numberInStock: 7,
        dailyRentalRate: 4.5
    },
    {
        _id: '8',
        title: 'The Sixth Sense',
        genre: { _id: '3a', name: 'Thriller'},
        numberInStock: 4,
        dailyRentalRate: 3.5
    },
    {
        _id: '9',
        title: 'The Avengers',
        genre: { _id: '1a', name: 'Action'},
        numberInStock: 7,
        dailyRentalRate: 3.5
    }
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {
            movieInDb._id = Date.now().toString();
            movies.push(movieInDb);
    }

    return movieInDb;
}
