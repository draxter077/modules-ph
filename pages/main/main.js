import head from "./head/main.js"

import homes from "./homes/main.js"
import abouts from "./abouts/main.js"
import servicess from "./servicess/main.js"
import postss from "./postss/main.js"
import contacts from "./contacts/main.js"

import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(homes())
    main.appendChild(abouts())
    main.appendChild(servicess())
    main.appendChild(postss())
    main.appendChild(contacts())
    main.appendChild(foot())
    return(main)
}