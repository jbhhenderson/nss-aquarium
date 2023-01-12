// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fishies">
            <h1 class="fish_info fish__name">${fish.name}</h1>
            <div class="fish_info fish__species">${fish.species}</div>
            <div class="fish_info fish__length">${fish.length}</div>
            <div class="fish_info fish__location">${fish.location}</div>
            <div class="fish_info fish__diet">${fish.food}</div>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}