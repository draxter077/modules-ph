import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            z-index:5;

            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:20px 0px;
            background:none;
            transition:background 0.5s;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    head.appendChild(links())

    window.addEventListener(
        "scroll",
        () => {
            if(window.scrollY > 0.25*(window.innerHeight)){
                head.style.background = "rgb(0,0,0)"
            }
            else if(window.scrollY < 0.25*(window.innerHeight)){
                head.style.background = "none"
            }
        }
    )
    return(head)
}