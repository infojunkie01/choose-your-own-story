import React, { useState, useEffect, useRef } from 'react';

import './App.css';
import { data } from "./data"


export default function App() {

  const sentences = [
    data[0].text
  ]

  const [sentence, setSentence] = useState('');
  const [sentencesArray, setSentencesArray] = useState(sentences);

  const [place, setPlace] = useState(data[0])

  const audioElement = useRef(null)

  function startStory(sound) {
    console.log("place", sound)
    playSound(sound)
    console.log("soundPlaying", soundPlaying)
    const intro = document.getElementById('intro');
    const story = document.getElementById('story');
    intro.hidden = true;
    story.hidden = false;
    
  }


  function showNext(trigger) {
  
    console.log(trigger, place)
   
    // look in children of place, find where triger mattches
        for (const child of place.children){
        
          if (child.trigger === trigger){
            playSound(child.sound)
            console.log(place, "PLACE")
            //console.log("place", place.children[place.children.indexOf(child)])
            var newPlace = place.children[place.children.indexOf(child)]
            setPlace(newPlace) //set to index
            console.log("howdy", newPlace)
            if (newPlace.hasOwnProperty("children") === false){

              console.log("hi")
              const restart = document.getElementById('restart-button');
              restart.hidden = false;
              return child.text
            }else{
              return child.text
            }

            
            
          }
        }
    }

  function restart(){
    const restart = document.getElementById('restart-button');
    restart.hidden = true;
    setPlace(data[0])
    setSentence('')
    setSentencesArray(sentences)
    const intro = document.getElementById('intro');
    const story = document.getElementById('story');
    intro.hidden = false;
    story.hidden = true;
    audioRef.current.pause();
    audioElement = null
  }

  const [soundPlaying, setSoundPlaying] = useState(null)
  const audioRef = useRef(null)

  function playSound(sound) {
    audioRef.current.pause() //stop whatever's playing
    audioRef.current.src = sound //set new source
    audioRef.current.load()
    audioRef.current.play()
    }



  return (
    <div className="App">

      <header className=""></header>

      <main>
        <h1>When will you wake up?</h1>

        <div id="intro">
          <img id="intro-illustration" src="when-will-you-wake-up/images/intro.png"/>
          
          <p>Do you wake on the first alarm or hit 'snooze' to sleep in?</p>
          <p>Click the buttons to see how the morning unfolds.</p>
          <br/>
          <button id="start-button" onClick={() => {startStory(place.sound);}}>Begin</button>
          
        </div>

        <div id="story" hidden>
          <div id="text-container">
            {sentencesArray.map( (sentence, index) => 
              <p  data={sentence}>
                {sentence.split(" ").map(word => {
                  if (word.startsWith('{')){
                    word = word.substring(1, word.length-1);
                    if (index === (sentencesArray.length-1) ){
                      return(
                        <button value={word} 
                            onClick={() => {
                              setSentencesArray([
                                ...sentencesArray,
                                showNext(word)
                              ]);
                            }}
                        >
                        {word}
                        </button>
                      )
                    }else{
                      return(
                        <> {word} </>
                      )
                    }
                  } else{
                    return(
                      <> {word} </>
                    )
                  }
                })}
              </p>
            )} 
          <br/>
          <button id="restart-button" onClick={restart} hidden>Restart</button>
          </div> 

          <div id="illustration">
            <img src={place.image}/>
          </div>

          <audio 
            ref={audioRef}
            src = {soundPlaying}
          />  
                 
        </div>

      </main>
    </div>
  ) //end of return

}


