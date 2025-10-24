import background from "./background/main.js"
import title from "./title/main.js"
import slogan from "./slogan/main.js"
import whatsapp from "./whatsapp/main.js"
import arrow from "./arrow/main.js"

export default function home(){
    let style = `
        {
            position:relative;

            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:100svh;
            width:20%;
            background:rgb(200,200,200);
            color:rgb(0,0,0);
            font-size:22px;
            overflow:hidden;
        }`

    const home = cE("div", style)
    home.appendChild(background())
    home.appendChild(title())
    home.appendChild(slogan())
    home.appendChild(whatsapp())
    home.appendChild(arrow())
    return(home)
}