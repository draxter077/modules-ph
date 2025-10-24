export default function background(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;

            z-index:0;
            width:100%;
            box-shadow:inset 0px 0px 10px 0px rgb(0,0,0);
        }`

    const background = cE("img", style)
    background.src = "./assets/0.jpg"
    return(background)
}