import React, {Component} from 'react'

export class VictoryMessage extends Component {

render() {

let winMessages = ['Oh yeaaa!', 'You know it!', 'What else did you expect?', 'YUPPP', 'Hell yea!', '%$*# YEAH!', 'Hot diggity!']
let randomIndex = Math.floor(Math.random() * winMessages.length)
let randomVictoryMessage = winMessages[randomIndex]

  return(
    <div>
    <p> {randomVictoryMessage} </p>
    </div>
  )
 }
}

export default VictoryMessage
