export default function logo(){
    let style = `
        {
            height:60px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.jpg"
    return(logo)
}