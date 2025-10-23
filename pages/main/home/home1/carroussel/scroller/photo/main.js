export default function photo(){
    let style = `
        {
            height:100%;
            width:500px;

            border-radius:5px;
            margin:0px 2.5svw;
            background:rgb(0,0,0);
            box-shadow:0px 0px 2px 0px rgb(0,0,0);
        }`

    const photo = cE("img", style)
    return(photo)
}