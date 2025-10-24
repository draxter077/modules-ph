import icon from "./icon/main.js"
import title from "./title/main.js"
import tags from "./tags/main.js"

export default function front(t, tgs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            width:50%;
            height:100%;
            padding:10px;
            color:var(--colorBlack);
        }`

    const front = cE("div", style)
    front.appendChild(icon())
    front.appendChild(title(t))
    front.appendChild(tags(tgs))
    return(front)
}