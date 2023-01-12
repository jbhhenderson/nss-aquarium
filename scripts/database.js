/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = { //object with property fish
    fish: [ //array of objects with various properties
        {
            name: "Bart", //string
            food: "crustaceans",
            length: 3, //integer
            location: 'Carribean Sea',
            image: 'https://static.wixstatic.com/media/8d50dc_94d2d9efa1454c2abfc916cd6d0ab497~mv2.jpeg/v1/fill/w_2500,h_1668,al_c/8d50dc_94d2d9efa1454c2abfc916cd6d0ab497~mv2.jpeg',
            species: 'Clownfish'
        },
        {
            name: "George",
            food: "minnows",
            length: 12,
            location: 'Mediterranean Sea',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6f%2Ff3%2F0a%2F6ff30aeba92bd0a3da4d37f7826e940c.jpg&f=1&nofb=1&ipt=32c1514de97c4f12d85449d304d58ba73a253ac91ab8c5ed7e39704cecf5c99b&ipo=images',
            species: 'Mullet'
        },
        {
            name: "Neptune",
            food: "plankton",
            length: 1,
            location: 'Arctic Sea',
            image: 'https://www.tradeonlytoday.com/.image/t_share/MTQ4ODQ5NjE4MzA2NjA2Nzcx/snapper1102.jpg',
            species: 'Red Snapper'
        },
        {
            name: "Maximus",
            food: "shrimp",
            length: 6,
            location: 'Great Barrier Reef',
            image: 'https://farm3.staticflickr.com/2239/2299333886_e14dc5b503_b.jpg',
            species: 'Cleaner Shrimp'
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}