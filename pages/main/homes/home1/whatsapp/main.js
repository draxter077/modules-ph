export default function whatsapp(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            z-index:1;
            font-size:22px;
            height:55px;
            background:green;
            color:var(--colorWhite);
            padding:10px 20px 12px;
            margin:40px 0px 0px 0px;
            border-radius:50px;
            cursor:pointer;
            transition:all 0.5s;
        }
        >img{
            height:100%;
            margin:0px 10px 0px 0px;
            filter:invert(1);
        }
        :hover{
            box-shadow:0px 0px 0px 5px rgb(255,255,255);
        }
        :responsive{
            font-size:20px;
            height:50px;
        }`

    const whatsapp = cE("a", style)
    whatsapp.innerHTML = "<img src='https://ph.net.br/assets/whatsapp.png'/> Entre em contato"
    whatsapp.href = linkWhatsapp
    whatsapp.target = "_blank"
    return(whatsapp)
}