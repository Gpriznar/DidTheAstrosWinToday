import React, {Component} from 'react'
import axios from 'axios'
import './TodaysScore.css';



export class TodaysScore extends Component {
  constructor() {
    super()

    this.state = {
      games: [],
      offday: true
    }
  }

componentDidMount = () => {
    let todaysDate = new Date();
    console.log(todaysDate)
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.sportradar.us/mlb-t6/games/${todaysDate.getFullYear()}/${(todaysDate.getMonth()+1)}/${todaysDate.getUTCDate()}/boxscore.json?api_key=82zanc4f93d4xd6x96awntpw`,{crossdomain:true})
    .then(response => {
      console.log(response)
      if (response.data.league.games === undefined){
        this.setState({offday: true})
      } else {
        response.data.league.games.map((game) => {
       if( game.game.home_team === 'eb21dadd-8f10-4095-8bf3-dfb3b779f107' || game.game.away_team === 'eb21dadd-8f10-4095-8bf3-dfb3b779f107'){
          this.setState({games: response.data.league.games, offday: false})
        }
      }
    )
  }
 })
}
  render(){


    const gameinfo = this.state.games.map((info, index) => {

    if (info.game.home_team === 'eb21dadd-8f10-4095-8bf3-dfb3b779f107' && info.game.home.runs > info.game.away.runs)

    {return(
      <div>
      <ul className="ScoresList">
      <li>
      <p> You know it! </p>
      <p> {info.game.home.name} - {info.game.home.runs} </p>
      <p> {info.game.away.name} - {info.game.away.runs} </p>
      </li>
      </ul>
      </div>
      )
    }
    else if (info.game.home_team === 'eb21dadd-8f10-4095-8bf3-dfb3b779f107' && info.game.home.runs < info.game.away.runs)
        {return(
        <div>
        <ul className="ScoresList">
        <li>
        <p> Not Today Champ </p>
        <p> {info.game.home.name} - {info.game.home.runs} </p>
        <p> {info.game.away.name} - {info.game.away.runs} </p>
        </li>
        </ul>
        </div>
        )
      }
    })

    if(this.state.offday === true){
      return(
        <div>
        < p className="noGame"> No game so far today! Check back later</p>
        </div>
    )
  }
  else {
    return (
      <div className="WinButton">
        {gameinfo}
      </div>
    )
   }
  }


}

export default TodaysScore
