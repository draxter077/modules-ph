import post from "./post/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:80%;
            height:100%;
        }`

    const content = cE("div", style)
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    content.appendChild(post())
    return(content)
}