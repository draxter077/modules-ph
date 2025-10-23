import slogan from "./slogan/main.js"
import carroussel from "./carroussel/main.js"
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
            width:100%;
            background:rgb(0,210,230);
            color:rgb(0,0,0);
            font-size:22px;
        }`

    const home = cE("div", style)
    home.appendChild(slogan())
    home.appendChild(carroussel())
    home.appendChild(arrow())
    return(home)
}