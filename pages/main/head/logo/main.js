export default function logo(){
    let style = `
        {
            height:60px;
            background:rgb(200,200,200);
            border:1px solid rgb(0,0,0);
        }`

    const logo = cE("img", style)
    logo.src = ""
    logo.alt = "Logo"
    return(logo)
}