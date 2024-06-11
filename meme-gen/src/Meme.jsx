import React from "react"
import "./Meme.css"

export default function Meme(){
    return(
        <main className="main">
            <form>
                <input type="text" placeholder="Header" className="Header"/>
                <input type="text" placeholder="Footer" className="Footer"/>
                <button className="button">Get a new image</button>
            </form>
        </main>
    )
}