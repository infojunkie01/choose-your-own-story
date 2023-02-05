import React, { useState } from 'react';



// export default function Sentence(props) {
//   const noteElements = props.notes.map((note, index) => (
//       <div key={note.id}>
//           <div
//               className={`title ${
//                   note.id === props.currentNote.id ? "selected-note" : ""
//               }`}
//               onClick={() => props.setCurrentNoteId(note.id)}
//           >
//           <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
//               <button 
//                   className="delete-btn"
//                   // Your onClick event handler here
//               >
//                   <i className="gg-trash trash-icon"></i>
//               </button>
//           </div>
//       </div>
//   ))

//   return (
//       <section className="pane sidebar">
//           <div className="sidebar--header">
//               <h3>Notes</h3>
//               <button className="new-note" onClick={props.newNote}>+</button>
//           </div>
//           {noteElements}
//       </section>
//   )
// }


// const handleClick = (e) => {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }
  
// function addSpan(sentences){
//     const words_array = sentences[0].text.split(" ")
//     // let span_count = 0
//     words_array.forEach( (word, index) => {
        
//         if (word.charAt(0) === '{' && word.charAt(word.length-1) === '}') {
//           //turn it into a span/button etc
//           let myWord = word.slice(1,-1)
         
//         //   let id = "span" + span_count 
//           words_array[index] = "<span className='highlight'> <button onClick={handleClick}>" + myWord + "</button></span>"
//          // document.getElementById(id).onClick = showNext(myWord)
//         //  span_count = span_count + 1
//         } 
//       })
//     return words_array.join(' ');
// }

// let new_sentence = addSpan(sentences)
// console.log("new_sentence", new_sentence)

// //trigger = clicked on word
// const current_sentences_array = sentences[0].children



// function Sentence() {    
//     // const [text, setText] = useState({text:''});


//     // executed once on component mount
//     // useEffect(() => {

//     // }, [])



//     // const showNext = (string) => {
//     //   //calculate new sentence
        

//     //   // create a copy of curreSentence Array
      
//     //   // push new sentence on that temp array

//     //   // set the currSentenceArray to that temp array
//     // } 


  

//     function showNext() {
//         console.log("clicked!")
//         // for (let i=0; i < current_sentences_array.length; i++){
//         //     if (clicked_word === current_sentences_array.trigger[i]){
//         //         new_sentence = addSpan(current_sentences_array)
//         //         console.log(new_sentence)
//         //         current_sentences_array = current_sentences_array[i].children
//         //     }
//         // }
//     }
    
//       return (
  
//               <p dangerouslySetInnerHTML={{__html: new_sentence }}/>
         
              
//       )
// }

// export default Sentence