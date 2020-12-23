import React, { Component } from 'react'

export default class Timer extends Component {
  state={
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 6
  }

  timer = () => {
    setInterval( () => {
      this.setState({seconds: this.state.seconds - 1})
      this.timerCountDown()
      console.log(this.state.days, this.state.hours, this.state.minutes, this.state.seconds)
    }, 1000)
  }

  timerCountDown = () => {
    if (this.state.seconds === -1) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59
      })
    }

    if (this.state.minutes === -1) {
      this.setState({
        hours: this.state.hours - 1,
        minutes: 59,
      })
    }

    if (this.state.hours === -1) {
      this.setState({
        days: this.state.days - 1,
        hours: 23,
      })
    }

    if (this.state.days === -1) {
      this.setState({
        days: 10,
        hours: 0,
        minutes: 0,
        seconds: 0
      })
    }
  }

  componentDidMount() {
    this.timer()

    window.onload = () => {
      //document.querySelectorAll('.bbb').forEach( item => {
      //  item.classList.add('onTop')
      //})
      //document.querySelectorAll('.aaa').forEach( item => {
      //  item.classList.add('onBot')
      //})
    }
  }

  componentDidUpdate () {
    
  }
    

    

  render() {
    return (
      <div className="timerComponent">

        <div className="daysContainer">
          <div className="timeContainer daysTimer">
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">{this.state.days - 1}</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.days - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">{this.state.days}</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">{this.state.days}</p>
              </div>
            </div>
          </div>
          <p className="timeText daysText">DAYS</p>
        </div>

        <div className="hrsContainer">
          <div className="timeContainer hrsTimer"> 
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">{this.state.hours - 1}</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.hours - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">{this.state.hours}</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">{this.state.hours}</p>
              </div>
            </div>
          </div>
          <p className="timeText hrsText">HOURS</p>
        </div>

        <div className="minsContainer">
          <div className="timeContainer minsTimer">
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">{this.state.minutes - 1}</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.minutes - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">{this.state.minutes}</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">{this.state.minutes}</p>
              </div>
            </div>
          </div>
          <p className="timeText minsText">MINUTES</p>
        </div>

        <div className="secsContainer">
          <div className="timeContainer secsTimer">
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">{this.state.seconds - 1}</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.seconds - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">{this.state.seconds}</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">{this.state.seconds}</p>
              </div>
            </div>
          </div>
          <p className="timeText secsText">SECONDS</p>
        </div>
        
      </div>
    )
  }
}
