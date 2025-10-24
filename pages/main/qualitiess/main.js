import qualities1 from "./qualities1/main.js"

export default function qualitiess(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:100%;
            overflow-x:scroll;
        }`

    const qualitiess = cE("div", style)
    qualitiess.appendChild(qualities1())
    return(qualitiess)
}