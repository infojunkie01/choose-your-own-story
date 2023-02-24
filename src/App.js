import React, { useState, useRef } from 'react';

import './App.css';
import { data } from "./data"


export default function App() {

  const sentences = [
    data[0].text
  ]

  const [sentencesArray, setSentencesArray] = useState(sentences);

  const [place, setPlace] = useState(data[0])

  const [soundPlaying] = useState(null)
  const audioRef = useRef(null)

  // This function is called when user hits 'begin'
  function startStory(sound, soundloop) {
    playSound(sound, soundloop)
    const intro = document.getElementById('intro');
    const story = document.getElementById('story');
    intro.hidden = true;
    story.hidden = false;
  }

  // Function to play next sound, called in showNext function
  function playSound(sound, loop) {
    audioRef.current.pause() //stop whatever's playing
    audioRef.current.src = sound //set new source
    audioRef.current.load()
    audioRef.current.play()
    const audio = document.getElementById('audio');
    console.log("loop", loop)
    audio.loop = loop;
    }

  // When user hits buttons once story begins, this shows the next line, image and audio
  function showNext(trigger) {

        // look in children of place, find where triger matches
        for (const child of place.children){
        
          if (child.trigger === trigger){
            playSound(child.sound, child.soundloop)
            var newPlace = place.children[place.children.indexOf(child)]
            setPlace(newPlace) //set to index
            if (newPlace.hasOwnProperty("children") === false){ // if end of story is reached show retart button
              const restart = document.getElementById('restart-button');
              restart.hidden = false;
              return child.text
            }else{
              return child.text
            }
            
          }
        }
    }

  // restarts story
  function restart(){
    const restart = document.getElementById('restart-button');
    restart.hidden = true;
    setPlace(data[0])
    setSentencesArray(sentences)
    const intro = document.getElementById('intro');
    const story = document.getElementById('story');
    intro.hidden = false;
    story.hidden = true;
    audioRef.current.pause();
  }

  // Stops sound from playing when you are out of the window
  document.addEventListener("visibilitychange", event => {
    if (document.visibilityState === "visible") {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  })

  return (
    <div className="App">

      <header className=""></header>

      <main>
        <h1>When will you wake up?</h1>

        <div id="intro">
          <img id="intro-illustration" src="https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/intro.png?raw=true" alt='background illustration'/>
          <p>Do you wake on the first alarm or hit 'snooze' to sleep in?</p>
          <p>Click the buttons to see how the morning unfolds.</p>
          <br/>
          <button id="start-button" onClick={() => {startStory(place.sound, place.soundloop);}}>Begin</button>
          
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
       
          <button id="restart-button" onClick={restart} hidden>Restart</button>
          </div> 

          <div id="illustration">
            <img src={place.image} alt='background illustration'/>
          </div>

          <audio id="audio"
            ref={audioRef}
            src={soundPlaying}
            
          />  
                 
        </div>

      </main>

      <p id="attribution">Created by <a href="https://github.com/infojunkie01" target="_blank">@infojunkie01</a></p>
     
    </div>
  ) //end of return

}


