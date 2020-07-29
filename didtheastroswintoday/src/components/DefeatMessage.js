import React, {Component} from 'react'

export class DefeatMessage extends Component {

render() {

  let defeatMessages = ['UH OH', 'MAYBE NEXT TIME', 'NOT TODAY', 'DANG...', 'UNFORTUNATELY NOT', 'NOOOOOO!', 'BASEBALL IS BAD', 'NO.', 'THEY DID NOT']
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
