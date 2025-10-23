export default function title(t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            padding:40px 0px;
            font-size:22px;
            color:rgb(0,0,0);
            background:rgb(255,255,255);
            border:1px solid rgb(0,0,0);
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}