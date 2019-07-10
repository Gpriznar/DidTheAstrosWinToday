import React, {Component} from 'react'
import axios from 'axios'
import {apiKey} from '../apiKey'
import './TodaysScore.css';
import Schedule from './Schedule/Schedule'



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
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.sportradar.us/mlb-t6/games/${today.getFullYear()}/${(today.getMonth()+1)}/${today.getUTCDate()}/boxscore.json?api_key=${apiKey}`,{crossdomain:true})
    .then(response => {
      let games = response.data.league.games
      let todaysGame = games ? games.filter(game => {
        return (game.game.home_team === teamId || game.game.away_team === teamId)
      })[0] : null
      this.setState({
        todaysGame: todaysGame, 
        myTeamAtHome: todaysGame ? todaysGame.home_team === teamId : null
      })
    })
    .catch(error => console.log(error))
  }

  render(){
    let body = null
    if(!this.state.game){
      body = ( <div><p className="noGame"> No game so far today! Check back later</p></div> )
    }
    else {
      let myTeamAtHome = this.state.myTeamAtHome
      let homeTeamWon = this.state.game.home.runs > this.state.game.away.runs
      if ((myTeamAtHome && homeTeamWon) || (!myTeamAtHome && !homeTeamWon)){
        body = (
          <div>
            <ul className="ScoresList">
              <li>
                <p className = "winText"> You know it! </p>
                <p> {this.state.game.home.name} - {this.state.game.home.runs} </p>
                <p> {this.state.game.away.name} - {this.state.game.away.runs} </p>
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
                <p> {this.state.game.home.name} - {this.state.game.home.runs} </p>
                <p> {this.state.game.away.name} - {this.state.game.away.runs} </p>
              </li>
            </ul>
          </div>
          )
      }
    }

    return (
      <div className="resultText">
        {body}
        <Schedule today = {this.state.today} teamId = {this.state.teamId}/>
      </div>
    )
  }

}

export default TodaysScore




