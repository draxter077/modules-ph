import about1 from "./about1/main.js"
import about2 from "./about2/main.js"
import about3 from "./about3/main.js"
import about4 from "./about4/main.js"
import about5 from "./about5/main.js"

export default function abouts(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:500%;
            overflow-x:scroll;
        }`

    const abouts = cE("div", style)
    abouts.appendChild(about1())
    abouts.appendChild(about2())
    abouts.appendChild(about3())
    abouts.appendChild(about4())
    abouts.appendChild(about5())
    return(abouts)
}