import contact from "./contact/main.js"

export default function contacts(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:95%;
        }
        :responsive{
            align-items:center;
        }`

    const contacts = cE("div", style)
    contacts.appendChild(contact("https://www.ph.net.br/assets/instagram.png", userInstagram, linkInstagram))
    contacts.appendChild(contact("https://www.ph.net.br/assets/whatsapp.png", numberWhatsapp, linkWhatsapp))
    contacts.appendChild(contact("./assets/elements/home.png", localAddress, linkAddress))
    return(contacts)
}