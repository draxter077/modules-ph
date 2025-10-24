export default function text(t){
    let style = `
        {
            width:100%;
            font-size:15px;
        }
        :responsive{
            font-size:11px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}