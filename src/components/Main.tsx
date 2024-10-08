import React from "react"
import Kontakt from "./Kontakt";
import "../styles/main.css"

interface MainProps {
    activePage: string;
}

function Main(props: MainProps) {
    return (
        <div className="mainPozadina">
            <p className="mainParagraf">Dobro došli na Gra-tis novu sluzbenu web stranicu i web shop</p>
            {props.activePage === 'Home'}
            {props.activePage === 'Usluge'}
            {props.activePage === 'Kontakt' && <Kontakt />}
        </div>
    )
}

export default Main