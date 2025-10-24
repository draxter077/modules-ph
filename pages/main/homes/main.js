import home1 from "./home1/main.js"
import home2 from "./home2/main.js"
import home3 from "./home3/main.js"
import home4 from "./home4/main.js"
import home5 from "./home5/main.js"

export default function homes(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:500%;
            overflow-x:scroll;
        }`

    const homes = cE("div", style)
    homes.appendChild(home1())
    homes.appendChild(home2())
    homes.appendChild(home3())
    homes.appendChild(home4())
    homes.appendChild(home5())
    return(homes)
}