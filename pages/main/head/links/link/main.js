export default function link(t, href){
    let style = `
        {
            font-size:18px;
            color:rgb(0,0,0);
            padding:0px 10px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:translateY(-30%);
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", () => document.getElementById(href).scrollIntoView({behavior:"smooth"}))
    return(link)
}