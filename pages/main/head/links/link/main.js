export default function link(t, href){
    let style = `
        {
            font-size:18px;
            color:rgb(255,255,255);
            margin:0px 20px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:translateY(-25%);
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", () => document.getElementById(href).scrollIntoView({behavior:"smooth"}))
    return(link)
}