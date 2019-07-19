import React, {Component} from 'react'
import axios from 'axios'
import {apiKey} from '../apiKey'
import {apiPW} from '../apiKey'
import './TodaysGame.css';
import Breakpoint from 'react-socks'
import VictoryMessage from "./VictoryMessage"
import DefeatMessage from "./DefeatMessage"



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
            gameStatus: 'loading',

        }
    }


    componentDidMount = () => {
      let today = this.state.today
      let month = (today.getUTCMonth() + 1).toString().padStart(2, '0')
        axios({
            method: 'get',
            url: `https://api.mysportsfeeds.com/v2.1/pull/mlb/current/date/${today.getFullYear()}${month}${today.getUTCDate()}/games.JSON?team=hou`,
            auth: {
                username: apiKey,
                password: apiPW
            }
        }).then(response => {
            const games = response.data.games[0]


            if (response.data.references === null) {
              this.setState({
                gameStatus: 'none'
              })
            }
            else if (response.data.references !== null) {
              this.setState({
                awayTeam: games.schedule.awayTeam.abbreviation,
                homeTeam: games.schedule.homeTeam.abbreviation,
                gameStart: new Date(games.schedule.startTime),
                awayScore: games.score.awayScoreTotal,
                homeScore: games.score.homeScoreTotal,
                inning: games.score.currentInning,
                topOrBottom: games.score.currentInningHalf,
              })
            }

            if(games.schedule.playedStatus === "UNPLAYED") {
                this.setState({
                    gameStatus: 'pregame'
                })
            }
             else if(games.schedule.playedStatus === "LIVE") {
                this.setState({
                    gameStatus: 'live'
                })
            }
            else if(games.schedule.playedStatus === "COMPLETED"){
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

      if(this.state.gameStatus === 'loading') {
        body = (
          <div>Loading...</div>
        )
      }


      else if(this.state.gameStatus === 'none') {
        body = (
          <div>
          <p> No Game Today </p>
          <p> Check Back Tomorrow!</p>
          </div>
        )
      }

      else if(this.state.gameStatus === 'live') {
            body = (
                <div>
                <p>{this.state.awayTeam} - {this.state.awayScore}</p>
                <p>{this.state.homeTeam} - {this.state.homeScore}</p>
                <p>{this.state.topOrBottom} of inning {this.state.inning}</p>
                </div>
            )
        }
        else if(this.state.awayTeam === 'HOU' && this.state.awayScore > this.state.homeScore) {
          body = (
              <div>
              <VictoryMessage />
              <p>{this.state.awayTeam} - {this.state.awayScore}</p>
              <p>{this.state.homeTeam} - {this.state.homeScore}</p>
              </div>
          )
        }
        else if(this.state.awayTeam === "HOU" && this.state.awayScore < this.state.homeScore) {
          body = (
              <div>
              <DefeatMessage />
              <p>{this.state.awayTeam} - {this.state.awayScore}</p>
              <p>{this.state.homeTeam} - {this.state.homeScore}</p>
              </div>
          )
        }
        else if(this.state.homeTeam === 'HOU' && this.state.homeScore > this.state.awayScore) {
          body = (
              <div>
              <VictoryMessage />
              <p>{this.state.awayTeam} - {this.state.awayScore}</p>
              <p>{this.state.homeTeam} - {this.state.homeScore}</p>
              </div>
          )
        }
        else if(this.state.homeTeam === "HOU" && this.state.homeScore < this.state.awayScore) {
          body = (
              <div>
              <DefeatMessage />
              <p>{this.state.awayTeam} - {this.state.awayScore}</p>
              <p>{this.state.homeTeam} - {this.state.homeScore}</p>
              </div>
          )
        }
        else if(this.state.gameStatus === 'pregame') {
          let date = this.state.gameStart
          let isAM = true
          if(date.getHours() > 11) {
            isAM = false
          }
            body = (
                <div>
                <p> Game Starts at</p>
                <p> {date.getHours().toString() % 12}:{date.getMinutes().toString().padStart(2, '0')} {isAM ? 'AM':'PM'} (CDT)</p>
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
