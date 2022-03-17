import {Navbar} from "../../../components/navbar/navbar.js"

function Header(){
    return(
        <header className="header">
            <Navbar logoImage={"logo image object has to be passed here containing img path and img alt text"}/>
        </header>
    )
}

export {Header};