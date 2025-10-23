import head from "./head/main.js"

import home1 from "./home/home1/main.js"
import home2 from "./home/home2/main.js"
import home3 from "./home/home3/main.js"
//import home4 from "./home/home4/main.js"
//import home5 from "./home/home5/main.js"

import about1 from "./about/about1/main.js"
import about2 from "./about/about2/main.js"
//import about3 from "./about/about3/main.js"
//import about4 from "./about/about4/main.js"
//import about5 from "./about/about5/main.js"

//import services1 from "./services/services1/main.js"
//import services2 from "./services/services2/main.js"
//import services3 from "./services/services3/main.js"
//import services4 from "./services/services4/main.js"
//import services5 from "./services/services5/main.js"

//import posts1 from "./posts/posts1/main.js"
//import posts2 from "./posts/posts2/main.js"
//import posts3 from "./posts/posts3/main.js"
//import posts4 from "./posts/posts4/main.js"
//import posts5 from "./posts/posts5/main.js"

//import contact1 from "./contact/contact1/main.js"
//import contact2 from "./contact/contact2/main.js"
//import contact3 from "./contact/contact3/main.js"
//import contact4 from "./contact/contact4/main.js"
//import contact5 from "./contact/contact5/main.js"

import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(about2())
    main.appendChild(foot())
    return(main)
}