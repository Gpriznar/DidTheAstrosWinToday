import React, {Component} from 'react'
import axios from 'axios'
import {apiKey} from '../apiKey'
import './TodaysGame.css';
import Breakpoint from 'react-socks'
import VictoryMessage from './VictoryMessage'
import DefeatMessage from './DefeatMessage'

export class TodaysGame extends Component {
    constructor() {
        let today = new Date()
        super()

        this.state = {
            venueId: 120,
            today: today,
            gameStart: '',
            homeTeam: '',
            awayTeam: '',
            inning: 0,
            topOrBottom: '',
            awayScore: 0,
            homeScore: 0,
            gameStatus: '',

        }
    }


    componentDidMount = () => {
      let today = this.state.today
      let month = (today.getUTCMonth() + 1).toString().padStart(2, '0')
        axios({
            method: 'get',
            url: `https://api.mysportsfeeds.com/v2.1/pull/mlb/current/date/${today.getFullYear()}${month}${today.getUTCDate()}/games.JSON?team=hou`,
            auth: {
                username: 'fbd092c8-d4ac-4444-bfea-24b226',
                password: 'MYSPORTSFEEDS'
            }
        }).then(response => {
            console.log('Authenticated')
            const games = response.data.games[0]
            this.setState({
                awayTeam: games.schedule.awayTeam.abbreviation,
                homeTeam: games.schedule.homeTeam.abbreviation,
                gameStart: new Date(games.schedule.startTime).toString(),
                awayScore: games.score.awayScoreTotal,
                homeScore: games.score.homeScoreTotal,
                inning: games.score.currentInning,
                topOrBottom: games.score.currentInningHalf
            })
            if(games.schedule.playedStatus === "UNPLAYED") {
                this.setState({
                    gameStatus: 'pregame'
                })
            } else if(games.schedule.playedStatus === "LIVE") {
                this.setState({
                    gameStatus: 'live'
                })
            } else {
                this.setState({
                    gameStatus: 'final'
                })
            }
        }).catch(error => {
            console.log('Error on Authenication')
            console.log(error)
        })
    }

    render() {
        let body = null

        if(this.state.gameStatus === 'pregame') {
            body = (
                <div>
                <p> Game Starts at</p>
                <p> {this.state.gameStart} </p>
                </div>
            )
        }
        else if(this.state.gameStatus === 'live') {
            body = (
                <div>
                <p>{this.state.awayTeam} - {this.state.awayScore}</p>
                <p>{this.state.homeTeam} - {this.state.homeScore}</p>
                <p>{this.state.topOrBottom} of the {this.state.inning}</p>
                </div>
            )
        } else if(this.state.gameStatus === 'final') {
            body = (
                <div>
                <p>Final Score</p>
                <p>{this.state.awayTeam} - {this.state.awayScore}</p>
                <p>{this.state.homeTeam} - {this.state.homeScore}</p>
                </div>
            )
        }


        return (
          <div>
          <Breakpoint large up>
                   <div className='desktopText'> {body}</div>
          </Breakpoint>

          <Breakpoint medium only>
                  <div className='tabletText'> {body}</div>
          </Breakpoint>

          <Breakpoint small down>
                  <div className='mobileText'> {body}</div>
          </Breakpoint>
          </div>
        )
      }
    }

export default TodaysGame
