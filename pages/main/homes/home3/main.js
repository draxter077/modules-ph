export default function a(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            height:100svh;
            width:20%;
            background:rgb(200,200,200);
            color:rgb(0,0,0);
            font-size:22px;
        }`

    const a = cE("div", style)
    a.innerHTML = "Ainda não feito"
    return(a)
}