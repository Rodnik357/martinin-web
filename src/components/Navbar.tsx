import React from "react"

import "../styles/navbar.css"
import homePicNavbar from "../assets/home.png"
import servicePic from "../assets/customer-service.png"
import aboutUsPic from "../assets/about-us.png"
import contactPic from "../assets/contact-mail.png"




interface NavbarProps {
    setActivePage: (page: string) => void;
}

function Navbar(props: NavbarProps) {
    return (
        <nav className="navbar">
            <div className="homeButton" onClick={() => props.setActivePage('Home')}>
                <img src={homePicNavbar} alt="homePicOnNavbar" />
                <p>Home</p></div>
            <div className="serviceButton" onClick={() => props.setActivePage('Usluge')}>
                <img src={servicePic} alt="servicePic" /> <p>Usluge</p></div>
            <div className="aboutUsButton" onClick={() => props.setActivePage('O nama')}>
                <img src={aboutUsPic} alt="aboutUsPic" /><p>O nama</p> </div>
            <div className="contactButton" onClick={() => props.setActivePage('Kontakt')} ><img src={contactPic} alt="contactPic" /><p>Kontakt</p> </div>
        </nav>
    )
}

export default Navbar
