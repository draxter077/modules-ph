import about from "./about/main.js"
import team from "./team/main.js"

export default function about_(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            background:rgb(100,150,0);
            padding:150px 0px 0px;
        }
        :responsive{
            flex-direction:column;
            padding:20px;
        }`
    
    const about_ = cE("div", style)
    about_.id = "about"
    about_.appendChild(about())
    about_.appendChild(team())
    return(about_)
}