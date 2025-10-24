import services1 from "./services1/main.js"
import services2 from "./services2/main.js"
import services3 from "./services3/main.js"
import services4 from "./services4/main.js"
import services5 from "./services5/main.js"

export default function servicess(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:500%;
            overflow-x:scroll;
        }`

    const servicess = cE("div", style)
    servicess.appendChild(services1())
    servicess.appendChild(services2())
    servicess.appendChild(services3())
    servicess.appendChild(services4())
    servicess.appendChild(services5())
    return(servicess)
}