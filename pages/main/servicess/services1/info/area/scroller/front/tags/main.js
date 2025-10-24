export default function tags(ts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            width:100%;
            font-size:15px;
        }
        >span{
            height:10px;
            border:1px solid rgb(0,210,230);
            margin:0px 5px;
        }
        :responsive{
            font-size:12px;
        }`

    const tags = cE("div", style)
    for(let i = 0; i < ts.length; i++){
        tags.innerHTML += ts[i]
        if(i != ts.length - 1){tags.innerHTML += "<span></span>"}
    }
    return(tags)
}