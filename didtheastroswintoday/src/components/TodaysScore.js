import React, {Component} from 'react'
import axios from 'axios'
import {apiKey} from '../apiKey'
import './TodaysScore.css';




export class TodaysScore extends Component {
  constructor() {
    let today = new Date()
    super()
    this.state = {
      teamId: 'eb21dadd-8f10-4095-8bf3-dfb3b779f107',
      today: today,
      todaysGame: null,
      myTeamAtHome: null
    }
  }

  componentDidMount = () => {
    let today = this.state.today
    let teamId = this.state.teamId
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.sportradar.us/mlb-t6/games/${today.getFullYear()}/${today.getMonth()}/${today.getUTCDate()}/boxscore.json?api_key=${apiKey}`,{crossdomain:true})
    .then(response => {
      let games = response.data.league.games
      let astrosGame = games ? games.filter(game => {
        return (game.game.home_team === teamId || game.game.away_team === teamId)
      }) : []
      let todaysGame = null
      if(astrosGame.length !== 0){
        todaysGame = astrosGame[0].game
      }
      this.setState({
        todaysGame: todaysGame,
        myTeamAtHome: todaysGame ? todaysGame.home_team === teamId : null
      })
    })
    .catch(error => console.log(error))
  }

  render(){
    let body = null
    if(!this.state.todaysGame){
      body = ( <div><p className="noGame"> No game so far today! Check back later</p></div> )
    }
    else {
      let myTeamAtHome = this.state.myTeamAtHome
      let homeTeamWon = this.state.todaysGame.home.runs > this.state.todaysGame.away.runs
      if ((myTeamAtHome && homeTeamWon) || (!myTeamAtHome && !homeTeamWon)){
        body = (
          <div>
            <ul className="ScoresList">
              <li>
                <p className = "winText"> You know it! </p>
                <p> {this.state.todaysGame.home.name} - {this.state.todaysGame.home.runs} </p>
                <p> {this.state.todaysGame.away.name} - {this.state.todaysGame.away.runs} </p>
              </li>
            </ul>
          </div>
        )
      }
      else {
        body = (
          <div>
            <ul className="ScoresList">
              <li>
                <p> Not Today Champ </p>
                <p> {this.state.todaysGame.home.name} - {this.state.todaysGame.home.runs} </p>
                <p> {this.state.todaysGame.away.name} - {this.state.todaysGame.away.runs} </p>
              </li>
            </ul>
          </div>
          )
      }
    }

    return (
      <div className="resultText">
        {body}
      </div>
    )
  }

}

export default TodaysScore
