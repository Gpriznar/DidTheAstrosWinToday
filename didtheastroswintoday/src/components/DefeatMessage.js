import React, {Component} from 'react'

export class DefeatMessage extends Component {

render() {

  let defeatMessages = ['Uh oh', 'Maybe next time', 'Not today', 'Dang...', 'Unfortunately Not', 'NOOOOOO!', 'Baseball is bad right now']
  let randomIndex = Math.floor(Math.random() * defeatMessages.length)
  let randomDefeatMessage = defeatMessages[randomIndex]

  return(
    <div>
    <p> {randomDefeatMessage}</p>
    </div>
  )
}


}

export default DefeatMessage
