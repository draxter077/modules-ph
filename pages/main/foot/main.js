export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            color:var(--colorWhite);
            background:rgb(0,0,0);
            padding:7.5svh 0px;
            font-size:17px;
        }
        >a>img{
            height:28px;
            margin:0px 0px 0px 10px;
            border-radius:5px;
            transition:transform 0.5s;
        }
        >a>img:hover{
            transform:scale(1.1);
        }
        >span{
            margin:0px 20px;
        }
        :responsive{
            font-size:14px;
        }`

    const foot = cE("div", style)
    let d = new Date()
    foot.innerHTML = `Desenvolvido por <a target='_blank' href='https://www.ph.net.br'><img src='https://www.ph.net.br/assets/logo.jpg' /></a> <span>•</span> ${window.location.href.replace("http://","").replace("https://","").split("/")[0]} © ${d.getFullYear()} Todos os direitos reservados`
    return(foot)
}