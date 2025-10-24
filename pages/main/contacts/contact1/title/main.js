export default function title(){
    let style = `
        {
            font-size:40px;
            color:rgb(0,0,0);
            width:90%;
            text-align:center;
        }
        :responsive{
            font-size:30px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Estamos perto de você"
    return(title)
}