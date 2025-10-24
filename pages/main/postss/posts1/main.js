import title from "./title/main.js"
import content from "./content/main.js"

export default function posts(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:150px 0px 0px;
        }
        :responsive{width:95%;padding:10px;}`

    const posts = cE("div", style)
    posts.id = "posts"
    posts.appendChild(title())
    posts.appendChild(content())
    return(posts)
}