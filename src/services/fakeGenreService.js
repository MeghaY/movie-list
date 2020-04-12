export const genres = [
    {_id: '1a', name:'Action'},
    {_id: '2a', name: 'Comedy'},
    {_id: '3a', name: 'Thriller'}
];

export function getGenres() {
    return genres.filter(g => g);
}