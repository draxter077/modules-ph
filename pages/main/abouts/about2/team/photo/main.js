export default function photo(s){
    let style = `
        {
            width:30%;
            aspect-ratio:1;
            margin:10px 0px;
            border-radius:50%;
        }`

    const photo = cE(s!=undefined ? "img" : "div", style)
    if(s!=undefined){photo.src = s}
    return(photo)
}