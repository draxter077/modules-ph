import title from "./title/main.js"
import content from "./content/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            padding:150px 10svw 0px;
        }`

    const contact = cE("div", style)
    contact.id = "contact"
    contact.appendChild(title())
    contact.appendChild(content())
    return(contact)
}