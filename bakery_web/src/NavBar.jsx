import React from "react"
import Logo from './assets/ciel-logo.png'

export default function NavBar(){
    return(
        <div className="nav-bar">
            <div className="left-side">
                <img src={Logo}/>
            </div>
            <div className="right-side"></div>
        </div>
    )
}