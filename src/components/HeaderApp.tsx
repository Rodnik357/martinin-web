import "../styles/headerApp.css"

import logo from "../assets/digital-art.gif"

function HeaderApp() {
    return (<header className="headerApp">
        <>
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="headerStyle">GRA-TIS</h1>
        </>
    </header>)
}

export default HeaderApp