import icon from "./icon/main.js"
import title from "./title/main.js"
import text from "./text/main.js"

export default function area(d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            padding:10px;
            width:30%;
            height:fit-content;
            background:var(--colorWhite);
            margin:0px 0px 20px 0px;
            overflow:hidden;
            cursor:pointer;
            border-radius:10px;
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }
        :responsive{width:95%;}`

    const area = cE("div", style)
    area.appendChild(icon())
    area.appendChild(title(d.title))
    area.appendChild(text(d.text))
    return(area)
}