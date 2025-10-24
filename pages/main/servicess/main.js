import services1 from "./services1/main.js"
import services2 from "./services2/main.js"

export default function servicess(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:200%;
            overflow-x:scroll;
        }`

    const servicess = cE("div", style)
    servicess.appendChild(services1())
    servicess.appendChild(services2())
    return(servicess)
}