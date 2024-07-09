import React from "react"
import "./Meme.css"
import memesData from "./memesData"

export default function Meme(){
    const [meme, setMeme] = React.useState(
         {
         topText: '',
         bottomText:'',
         randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    )

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    return(
        <main className="main">
            <div>
                <input type="text" placeholder="Header" className="Header"/>
                <input type="text" placeholder="Footer" className="Footer"/>
                <button className="button"  onClick={getMemeImage}> Get a new image</button>
            </div>
            <img  class="image-div" src={meme.randomImage} alt="no image found!" />
        </main>
    )
}