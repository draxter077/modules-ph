import left from "./left/main.js"
import right from "./right/main.js"

export default function home(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            background:rgb(0,200,230);
            color:rgb(0,0,0);
            font-size:22px;
            padding:40px 0px;
        }`

    const home = cE("div", style)
    home.appendChild(left())
    home.appendChild(right())
    return(home)
}