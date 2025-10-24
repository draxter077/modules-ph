import contact1 from "./contact1/main.js"
import contact2 from "./contact2/main.js"
import contact3 from "./contact3/main.js"
import contact4 from "./contact4/main.js"
import contact5 from "./contact5/main.js"

export default function contacts(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:500%;
            overflow-x:scroll;
        }`

    const contacts = cE("div", style)
    contacts.appendChild(contact1())
    contacts.appendChild(contact2())
    contacts.appendChild(contact3())
    contacts.appendChild(contact4())
    contacts.appendChild(contact5())
    return(contacts)
}