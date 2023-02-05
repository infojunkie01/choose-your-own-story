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
            console.log("place", place.children[place.children.indexOf(child)])
            setPlace(place.children[place.children.indexOf(child)]) //set to index
            return child.text
          }
        }
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
          <div>
            <audio controls loop autoplay>
              <source src={place.sound} />
            </audio>
          </div>


        </main>
      </div>

  )


}


