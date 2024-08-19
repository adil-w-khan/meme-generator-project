import React from "react"
import memeFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={memeFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}