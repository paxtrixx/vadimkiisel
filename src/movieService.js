import client from './client';

const movieList = `
    _id,    
    title,
    'actor': actor->name
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieList}}`);
    return data;
};

