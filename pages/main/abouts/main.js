import about1 from "./about1/main.js"
import about2 from "./about2/main.js"

export default function abouts(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:200%;
            overflow-x:scroll;
        }`

    const abouts = cE("div", style)
    abouts.appendChild(about1())
    abouts.appendChild(about2())
    return(abouts)
}