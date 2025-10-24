export default function img(){
    let style = `
        {
            width:100%;
            aspect-ratio:5/6;
        }`

    const img = cE("img", style)
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg15horlnHv8EjLbCciXvyqrE8-O6Pud_s-g&s"
    return(img)
}