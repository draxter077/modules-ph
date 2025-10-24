import title from "./title/main.js"
import slogan from "./slogan/main.js"
import whatsapp from "./whatsapp/main.js"

export default function left(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            margin:0px 40px 0px 0px;
        }`

    const left = cE("div", style)
    left.appendChild(title())
    left.appendChild(slogan())
    left.appendChild(whatsapp())
    return(left)
}