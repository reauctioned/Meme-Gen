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
    
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main className="main">
            <div>
                <input 
                type="text" 
                placeholder="Header" 
                className="Header" 
                name = 'topText'
                value = {meme.topText}
                onChange = {handleChange}
                />
                
                <input 
                type="text" 
                placeholder="Footer" 
                className="Footer"
                name = 'bottomText'
                value = {meme.bottomText}
                onChange = {handleChange}
                />

                <button className="button"  
                onClick={getMemeImage}
                > Get a new image</button>

            </div>

            <div className = 'meme'>
            <img  class="image-div" src={meme.randomImage} alt="no image found!" />
              <h2 className="memetextTop">{meme.topText}</h2>
              <h2 className="memetextBottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}