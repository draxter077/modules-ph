import posts1 from "./posts1/main.js"
import posts2 from "./posts2/main.js"
import posts3 from "./posts3/main.js"
import posts4 from "./posts4/main.js"
import posts5 from "./posts5/main.js"

export default function postss(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:fit-content;
            width:500%;
            overflow-x:scroll;
        }`

    const postss = cE("div", style)
    postss.appendChild(posts1())
    postss.appendChild(posts2())
    postss.appendChild(posts3())
    postss.appendChild(posts4())
    postss.appendChild(posts5())
    return(postss)
}