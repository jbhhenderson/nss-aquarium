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
            length: 5,
            location: 'Great Barrier Reef',
            image: 'https://farm3.staticflickr.com/2239/2299333886_e14dc5b503_b.jpg',
            species: 'Cleaner Shrimp'
        }
    ],

    tips: [
        {
            fish: 'Clownfish',
            quote: 'Keep an anenome in the tank for housing',
            tank: 'Clean tank at least once a month'
        },
        {
            fish: 'Mullet',
            quote: "This fish isn't as cool as its namesake",
            tank: 'Keep in a larger tank: minimum 100 gallons'
        },
        {
            fish: 'Red Snapper',
            quote: 'Their red color comes from their shrimp diet',
            tank: 'This is a sociable fish that should be kept with others of its kind'
        },
        {
            fish: 'Cleaner Shrimp',
            quote: 'This crustacean lives up to its name in the cleaning department',
            tank: 'Can be put in just about any tank to take care of algae'
        }
    ],

    locations: [
        {
            ocean: 'Atlantic Ocean',
            place: 'Coast of Maine',
            caught: 'George the Mullet'
        },
        {
            ocean: 'Pacific Ocean',
            place: 'Great Barrier Reef',
            caught: 'Bart the Clownfish'
        },
        {
            ocean: 'Indian Ocean',
            place: 'Madagascar',
            caught: 'Maximus the Cleaner Shrimp'
        },
        {
            ocean: 'Arctic Ocean',
            place: 'Alaska',
            caught: 'Neptune the Red Snapper'
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (fish of database) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (fish of database) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (fish of database) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}

