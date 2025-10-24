import title from "./title/main.js"
import info from "./info/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            background:rgb(210,0,230);
            width:20%;
            margin:20px 0px 0px 0px;
            padding:20px 40px 40px;
            box-shadow:0px 0px 5px 30px var(--colorBlue05);
        }
        :responsive{padding:10px;}`

    const services = cE("div", style)
    services.id = "services"
    services.appendChild(title())
    services.appendChild(info())
    return(services)
}