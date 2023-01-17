// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"
import { getTips } from "./database.js"
import { getLocations } from "./database.js"

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

export const TipList = () => {
    const allTips = getTips()

    let htmlString = '<article class="tipList">'

    for (const tip of allTips) {
        htmlString += `<section class="tips">
        <div class="fishTips">
        <h1 class="fish_info tip__fish">${tip.fish}</h1>
        <div class="fish_info tip__quote">${tip.quote}</div>
        <div class="fish_info tip__tank">${tip.tank}</div>
        </div>
    </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const LocationList = () => {
    const allLocations = getLocations()

    let htmlString = '<article class="locationList">'

    for (const location of allLocations) {
        htmlString += `<section class="locations">
        <div class="fishLocations">
        <h1 class="fish_info location__fish">${location.ocean}</h1>
        <div class="fish_info location__quote">${location.place}</div>
        <div class="fish_info location__tank">${location.caught}</div>
        </div>
    </section>
`
    }
    htmlString += `</article>`

    return htmlString
}