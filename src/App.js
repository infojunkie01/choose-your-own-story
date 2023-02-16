import React, { useState, useEffect, useRef } from 'react';

import './App.css';
import { data } from "./data"
//import Sound from './components/Sound';


export default function App() {

  const [place, setPlace] = useState(data[0])

  const audioElement = useRef(null)

  function startStory(sound) {
    console.log("place", sound)
    playSound(sound)
    //setSoundPlaying(new Audio(sound)) 
    // soundPlaying.play();
    console.log("soundPlaying", soundPlaying)
    const intro = document.getElementById('intro');
     const story = document.getElementById('story');
    intro.hidden = true;
    story.hidden = false;
  }


  // useEffect(() => {
       
  //   return () => {
  //     soundPlaying.play();
  //      // playingAudio.pause();
  //   };
  //   }, []);


  function showNext(trigger) {
  
    console.log(trigger, place)
   
    // look in children of place, find where triger mattches
        for (const child of place.children){
        
          if (child.trigger == trigger){
            playSound(child.sound)
            //setSoundPlaying(new Audio(child.sound))
            //soundPlaying.play();
            //console.log("soundPlaying", soundPlaying)
            //console.log("place", place.children[place.children.indexOf(child)])
            setPlace(place.children[place.children.indexOf(child)]) //set to index
            return child.text
          }
        }
    }


  const [soundPlaying, setSoundPlaying] = useState(null)
  const audioRef = useRef(null)

  function playSound(sound) {
    //setSoundPlaying(sound)
    // var snd = new Audio(sound);
    console.log(sound, "snd")
    // snd.play();
console.log(audioRef, "audioRef")
    audioRef.current.pause() //stop whatever's playing
    audioRef.current.src = sound //set whatever sound you want to the src
    audioRef.current.load()
    audioRef.current.play()
    }

  const sentences = [
    data[0].text
  ]

  const [sentence, setSentence] = useState('');
  const [sentencesArray, setSentencesArray] = useState(sentences);


  return (

      <div className="App">
        <header className="">
        </header>
        <main>
        <h1>When will you wake up?</h1>
          
        <div id="intro">
          <p>Do you wake on the first alarm or hit 'snooze' to sleep in?</p>
         
          <br/>
          <p>Click the buttons to see how the morning unfolds.</p>
          <button id="start" onClick={() => {startStory(place.sound);}}>Begin</button>

        </div>

        <div id="story" hidden>
          <div id="text-container">
        
            {sentencesArray.map( (sentence, index) => 
              
              <p  data={sentence}>
                   
              {sentence.split(" ").map(word => {
                // console.log(sentencesArray, "Array")
                // console.log(sentence, "sentence")
                if (word.startsWith('{')){
                  word = word.substring(1, word.length-1);
                  if (index == (sentencesArray.length-1) ){
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

  )


}


