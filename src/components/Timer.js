import React, { Component } from 'react'

export default class Timer extends Component {
  state={
    days: 10,
    hours: 2,
    minutes: 2,
    seconds: 2,
    secondsUnder: 1
  }

  timer = () => {
    let logic = true

    setInterval( () => {
      this.setState({
        seconds: this.state.seconds - 1,
        secondsUnder: this.state.secondsUnder - 1
      })
      this.timerCountDown()
    }, 1000)

    setInterval( ()=> {
      (logic === true) ? this.flipTimer() : this.resetTimer()
      logic = !logic
    }, 500)
  }

  timerCountDown = () => {
    if (this.state.secondsUnder < 0) {
      this.setState({
        secondsUnder: 59
      })
    }
    if (this.state.seconds < 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59,
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

  flipTimer = () => {
    document.querySelector('.bbb').classList.remove('offTop')
    document.querySelector('.bbb').classList.add('onTop')
    document.querySelector('.aaa').classList.remove('offBot')
    document.querySelector('.aaa').classList.add('onBot')
  }

  resetTimer = () => {
    document.querySelector('.bbb').classList.remove('onTop')
    document.querySelector('.bbb').classList.add('offTop')
    document.querySelector('.aaa').classList.remove('onBot')
    document.querySelector('.aaa').classList.add('offBot')
  }

  componentDidMount() {
    this.timer()
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
              <div className="timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.days - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip">
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
              <div className="timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.hours - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip">
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
              <div className="timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">{this.state.minutes - 1}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip">
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
                <p className="timer timerTop timerDay">{this.state.secondsUnder}</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip offBot">
                <p className="timer timerBot timerDay">{this.state.secondsUnder}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip offTop">
                <p className="timer timerTop timerDay timerOver">{this.state.seconds}</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay timeOver">{this.state.seconds}</p>
              </div>
            </div>
          </div>
          <p className="timeText secsText">SECONDS</p>
        </div>
        
      </div>
    )
  }
}
