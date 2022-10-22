import React, { useState } from 'react';

//const [currSentence, setCurrSentence] = useState('')

const sentences = [
  {
      text: '{Bruce} woke to the {sound} of {the} alarm.',
      children: [
      {
        trigger: "Bruce",
        text: 'Bruce hit the snooze button, hoping to just get another 10 minutes of sleep',
        children: [
            {
              trigger: "Bruce",
              text: 'Bruce hit the snooze button, hoping to just get another 10 minutes of sleep',
      
            },
            {
              trigger: 'sound',
              text: 'Sounds like an annoying thing.',
            },
            {
              trigger: "the",
              text: 'The cow jumped over the moon.',
            }
          ]
      },
      {
        trigger: 'sound',
        text: 'Sounds like an annoying thing.',
        children: [
            {
              trigger: "Bruce",
              text: 'Bruce hit the snooze button, hoping to just get another 10 minutes of sleep',
      
            },
            {
              trigger: 'sound',
              text: 'Sounds like an annoying thing.',
            },
            {
              trigger: "the",
              text: 'The cow jumped over the moon.',
            }
          ]
      },
      {
        trigger: "the",
        text: 'The cow jumped over the moon.',
        children: [
            {
              trigger: "Bruce",
              text: 'Bruce hit the snooze button, hoping to just get another 10 minutes of sleep',
      
            },
            {
              trigger: 'sound',
              text: 'Sounds like an annoying thing.',
            },
            {
              trigger: "the",
              text: 'The cow jumped over the moon.',
            }
          ]
      }
    ]
  }

]

const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  
function addSpan(sentences){
    const words_array = sentences[0].text.split(" ")
    // let span_count = 0
    words_array.forEach( (word, index) => {
        
        if (word.charAt(0) === '{' && word.charAt(word.length-1) === '}') {
          //turn it into a span/button etc
          let myWord = word.slice(1,-1)
         
        //   let id = "span" + span_count 
          words_array[index] = "<span className='highlight'> <button onClick={handleClick}>" + myWord + "</button></span>"
         // document.getElementById(id).onClick = showNext(myWord)
        //  span_count = span_count + 1
        } 
      })
    return words_array.join(' ');
}

let new_sentence = addSpan(sentences)
console.log("new_sentence", new_sentence)

//trigger = clicked on word
const current_sentences_array = sentences[0].children



function Sentence() {    
    // const [text, setText] = useState({text:''});


    // executed once on component mount
    // useEffect(() => {

    // }, [])



    // const showNext = (string) => {
    //   //calculate new sentence
        

    //   // create a copy of curreSentence Array
      
    //   // push new sentence on that temp array

    //   // set the currSentenceArray to that temp array
    // } 


  

    function showNext() {
        console.log("clicked!")
        // for (let i=0; i < current_sentences_array.length; i++){
        //     if (clicked_word === current_sentences_array.trigger[i]){
        //         new_sentence = addSpan(current_sentences_array)
        //         console.log(new_sentence)
        //         current_sentences_array = current_sentences_array[i].children
        //     }
        // }
    }
    
      return (
  
              <p dangerouslySetInnerHTML={{__html: new_sentence }}/>
         
              
      )
}

export default Sentence