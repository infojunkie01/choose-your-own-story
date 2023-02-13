import React, { useState, useEffect } from 'react';

import './App.css';
import { data } from "./data"
import Sentence from './components/Elements/Sentence';


export default function App() {

  const [place, setPlace] = useState(data[0])

  function showNext(trigger) {
   
    console.log(trigger, place)
    
    // look in children of place, find where triger mattches
        for (const child of place.children){
          if (child.trigger == trigger){
            playSound(child.sound)
            console.log("place", place.children[place.children.indexOf(child)])
            setPlace(place.children[place.children.indexOf(child)]) //set to index
            return child.text
          }
        }
    }


  function playSound(sound) {
   
        var snd = new Audio(sound);
        console.log(snd)
        snd.play();
  
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
          
          <div id="text-container">
          <h1>When will you wake up?</h1>
            {sentencesArray.map( (sentence, index) => 
              
              <p  data={sentence}>
                     <audio autoplay>
                      <source src={place.sound} />
                    </audio>
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
          <div>
       
          </div>


        </main>
      </div>

  )


}


