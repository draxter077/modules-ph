import img from "./img/main.js"
import text from "./text/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:175px;
            font-size:20px;
            color:rgb(0,0,0);
            border-radius:5px;
            margin:20px 10px;
            box-shadow:0px 0px 3px 0px rgb(0,0,0);
            cursor:pointer;
        }
        :responsive{
            font-size:17px;
            width:200px;
        }`

    const content = cE("a", style)
    content.href = "https://www.instagram.com/reel/DQKaxu0DrgN"
    content.target = '_blank'

    content.appendChild(img())
    content.appendChild(text())
    return(content)
}