import React, {Component} from 'react'

export class VictoryMessage extends Component {

render() {

let winMessages = ['OH YEAH!', 'YOU KNOW IT!', 'WHAT ELSE DID YOU EXPECT?', 'YUP!', 'W000000000!']
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
