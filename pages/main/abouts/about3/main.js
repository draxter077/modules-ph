export default function a(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            background:rgb(200,200,200);
            color:rgb(0,0,0);
            font-size:22px;
        }`

    const a = cE("div", style)
    a.innerHTML = "Ainda não feito"
    return(a)
}