import icon from "./icon/main.js"
import text from "./text/main.js"

export default function quality(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:20%;
        }
        :responsive{width:95%;}`

    const quality = cE("div", style)
    quality.appendChild(icon())
    quality.appendChild(text())
    return(quality)
}