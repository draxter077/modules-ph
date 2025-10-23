export default function background(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            z-index:0;
            width:100%;
            height:100%;
            background:rgb(0,200,230);
        }`

    const background = cE("div", style)
    return(background)
}