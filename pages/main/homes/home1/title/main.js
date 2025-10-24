export default function title(){
    let style = `
        {
            z-index:1;
            font-size:40px;
            margin:0px 0px 20px 0px;
            color:rgb(255,255,255);
            text-shadow:0px 0px 5px rgb(0,0,0);
            padding:5px 0px;
            width:50%;
            border-bottom:1px solid rgb(255,255,255);
        }`

    const title = cE("div", style)
    title.innerHTML = "Título da empresa"
    return(title)
}