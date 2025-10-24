import contact1 from "./contact1/main.js"

export default function contacts(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:100%;
            overflow-x:scroll;
        }`

    const contacts = cE("div", style)
    contacts.appendChild(contact1())
    return(contacts)
}