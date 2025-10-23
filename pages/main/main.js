import head from "./head/main.js"

import title from "./title/main.js"
import home1 from "./home/home1/main.js"
import home2 from "./home/home2/main.js"
import home3 from "./home/home3/main.js"
import home4 from "./home/home4/main.js"
import home5 from "./home/home5/main.js"
import about1 from "./about/about1/main.js"
import about2 from "./about/about2/main.js"
import about3 from "./about/about3/main.js"
import about4 from "./about/about4/main.js"
import about5 from "./about/about5/main.js"
import services1 from "./services/services1/main.js"
import services2 from "./services/services2/main.js"
import services3 from "./services/services3/main.js"
import services4 from "./services/services4/main.js"
import services5 from "./services/services5/main.js"
import posts1 from "./posts/posts1/main.js"
import posts2 from "./posts/posts2/main.js"
import posts3 from "./posts/posts3/main.js"
import posts4 from "./posts/posts4/main.js"
import posts5 from "./posts/posts5/main.js"
import contact1 from "./contact/contact1/main.js"
import contact2 from "./contact/contact2/main.js"
import contact3 from "./contact/contact3/main.js"
import contact4 from "./contact/contact4/main.js"
import contact5 from "./contact/contact5/main.js"

import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    //main.appendChild(title("home1"))
    main.appendChild(home1())
    //main.appendChild(title("home2"))
    //main.appendChild(home2())
    //main.appendChild(title("home3"))
    //main.appendChild(home3())
    //main.appendChild(title("home4"))
    //main.appendChild(home4())
    //main.appendChild(title("home5"))
    //main.appendChild(home5())
    //main.appendChild(title("about1"))
    //main.appendChild(about1())
    //main.appendChild(title("about2"))
    //main.appendChild(about2())
    //main.appendChild(title("about3"))
    //main.appendChild(about3())
    //main.appendChild(title("about4"))
    //main.appendChild(about4())
    //main.appendChild(title("about5"))
    //main.appendChild(about5())
    //main.appendChild(title("services1"))
    //main.appendChild(services1())
    //main.appendChild(title("services2"))
    //main.appendChild(services2())
    //main.appendChild(title("services3"))
    //main.appendChild(services3())
    //main.appendChild(title("services4"))
    //main.appendChild(services4())
    //main.appendChild(title("services5"))
    //main.appendChild(services5())
    //main.appendChild(title("posts1"))
    //main.appendChild(posts1())
    //main.appendChild(title("posts2"))
    //main.appendChild(posts2())
    //main.appendChild(title("posts3"))
    //main.appendChild(posts3())
    //main.appendChild(title("posts4"))
    //main.appendChild(posts4())
    //main.appendChild(title("posts5"))
    //main.appendChild(posts5())
    //main.appendChild(title("contact1"))
    //main.appendChild(contact1())
    //main.appendChild(title("contact2"))
    //main.appendChild(contact2())
    //main.appendChild(title("contact3"))
    //main.appendChild(contact3())
    //main.appendChild(title("contact4"))
    //main.appendChild(contact4())
    //main.appendChild(title("contact5"))
    //main.appendChild(contact5())
    main.appendChild(foot())
    return(main)
}