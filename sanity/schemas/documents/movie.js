const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields:[
        {
            title: 'Movie Name',
            name: 'title',
            type: 'string',
            description: 'title of the movie',
        },
        {
            title: 'Name of main actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ]    
}

export default movie;