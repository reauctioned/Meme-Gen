import React from "react"
import "./Meme.css"
import memesData from "./memesData"

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    
    return(
        <main className="main">
            <div>
                <input type="text" placeholder="Header" className="Header"/>
                <input type="text" placeholder="Footer" className="Footer"/>
                <button className="button"  onClick={getMemeImage}> Get a new image</button>
            </div>
            <img  class="image-div" src={memeImage} alt="no image found!" />
        </main>
    )
}