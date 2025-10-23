export default function slogan(){
    let style = `
        {
            z-index:1;
            font-size:22px;
            color:rgb(255,255,255);
        }`

    const slogan = cE("div", style)
    slogan.innerHTML = "Slogan slogan slogan slogan slogan slogan slogan slogan slogan slogan slogan slogan slogan slogan"
    return(slogan)
}