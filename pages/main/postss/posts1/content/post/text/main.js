export default function text(){
    let style = `
        {
            font-size:14px;
            color:rgb(0,0,0);
            padding:5px 10px;
            text-align:justify;
        }`

    const text = cE("div", style)
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    return(text)
}