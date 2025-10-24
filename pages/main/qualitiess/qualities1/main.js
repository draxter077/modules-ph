import quality from "./quality/main.js"

export default function qualities(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            padding:50px 50px 0px;
            width:100%;
            background:rgb(150,200,0);
        }`

    const qualities = cE("div", style)
    qualities.appendChild(quality())
    qualities.appendChild(quality())
    qualities.appendChild(quality())
    qualities.appendChild(quality())
    return(qualities)
}