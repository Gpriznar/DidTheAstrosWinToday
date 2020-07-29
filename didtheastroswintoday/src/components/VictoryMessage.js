import React, {Component} from 'react'

export class VictoryMessage extends Component {

render() {

let winMessages = ['OH YEAH!', 'YOU KNOW IT!', 'WHAT ELSE DID YOU EXPECT?', 'YUP!', 'WOOOOOOOO!', 'TOOT TOOT!', 'BASEBALL IS GOOD!', 'THEY DID IN FACT, WIN TODAY', 'BUT OF COURSE!', 'YES', 'LIKE A CHAMP!', 'YOU BET THEY DIDCD !']
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
