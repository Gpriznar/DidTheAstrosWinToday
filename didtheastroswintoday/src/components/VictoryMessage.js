import React, {Component} from 'react'

export class VictoryMessage extends Component {

render() {

let winMessages = ['Oh yea!', 'You know it!', 'What else did you expect?', 'Yup!', 'Woooooooo!', 'TOOT TOOT!', 'Baseball it good right now!']
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
