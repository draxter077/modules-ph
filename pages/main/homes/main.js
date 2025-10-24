import home1 from "./home1/main.js"
import home2 from "./home2/main.js"

export default function homes(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:200%;
            overflow-x:scroll;
        }`

    const homes = cE("div", style)
    homes.appendChild(home1())
    homes.appendChild(home2())
    return(homes)
}