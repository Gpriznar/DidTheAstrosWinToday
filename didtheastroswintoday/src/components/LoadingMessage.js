import React, {Component} from 'react'

export class LoadingMessage extends Component {

render() {

let loadingMessages = ['Loading...', 'Moving divs around...', "I'm right behind you...", 'Gathering intel...', '011001010100011100', 'Looking up stats...', 'Curly boy is missing...', 'Wait for iiiiiit..']
let randomIndex = Math.floor(Math.random() * loadingMessages.length)
let randomLoadingMessage = loadingMessages[randomIndex]

  return(
    <div>
    <p> {randomLoadingMessage} </p>
    </div>
  )
 }
}

export default LoadingMessage
