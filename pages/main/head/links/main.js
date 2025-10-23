import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const links = cE("div", style)
    links.appendChild(link("Sobre", "about"))
    links.appendChild(link("Serviços", "services"))
    links.appendChild(link("Artigos", "posts"))
    links.appendChild(link("Contato", "contact"))
    return(links)
}