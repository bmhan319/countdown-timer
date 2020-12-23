import React, { Component } from 'react'

export default class Timer extends Component {
  state={
    days: 10,
    daysUnder: 9,
    hours: 0,
    hoursUnder: 23,
    minutes: 0,
    minutesUnder: 59,
    seconds: 2,
    secondsUnder: 1
  }

  timer = () => {
    let logic = true

    setInterval( () => {
      this.setState({
        seconds: this.state.seconds - 1,
        secondsUnder: this.state.secondsUnder - 1,
        minutesUnder: this.state.minutes - 1,
        daysUnder: this.state.days - 1
      })
      this.timerCountDown()
    }, 1000)

    setInterval( ()=> {
      (logic === true) ? this.flipTimer('.statusSecTop', '.statusSecBot') : this.resetTimer('.statusSecTop', '.statusSecBot')
      logic = !logic

      if (this.state.seconds === 0) {
        this.flipTimer('.statusMinTop', '.statusMinBot')
      } else {
        this.resetTimer('.statusMinTop', '.statusMinBot')
      }

      if (this.state.seconds === 0  && this.state.minutes === 0) {
        this.flipTimer('.statusHrTop', '.statusHrBot')
      } else {
        this.resetTimer('.statusHrTop', '.statusHrBot')
      }

      if (this.state.seconds === 0  && this.state.minutes === 0 && this.state.hours === 0) {
        this.flipTimer('.statusDaysTop', '.statusDaysBot')
      } else {
        this.resetTimer('.statusDaysTop', '.statusDaysBot')
      }
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
        seconds: 59
      })
    }

    if (this.state.minutesUnder < 0) {
      this.setState({
        minutesUnder: 59
      })
    }
    if (this.state.minutes < 0) {
      this.setState({
        hours: this.state.hours - 1,
        minutes: 59
      })
    }

    if (this.state.hoursUnder < 0) {
      this.setState({
        hoursUnder: 23
      })
    }
    if (this.state.hours < 0) {
      this.setState({
        days: this.state.days - 1,
        hours: 23,
      })
    }

    if (this.state.daysUnder < 0) {
      this.setState({
        daysUnder: 9
      })
    }
    if (this.state.days < 0) {
      this.setState({
        days: 10,
        daysUnder: 9,
        hours: 0,
        hoursUnder: 23,
        minutes: 0,
        minutesUnder: 59,
        seconds: 0,
        secondsUnder: 59
      })
    }
  }

  flipTimer = (top, bottom) => {
    document.querySelector(top).classList.remove('offTop')
    document.querySelector(top).classList.add('onTop')
    document.querySelector(bottom).classList.remove('offBot')
    document.querySelector(bottom).classList.add('onBot')
  }

  resetTimer = (top, bottom) => {
    document.querySelector(top).classList.remove('onTop')
    document.querySelector(top).classList.add('offTop')
    document.querySelector(bottom).classList.remove('onBot')
    document.querySelector(bottom).classList.add('offBot')
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
                <p className="timer timerTop timerDay">{this.state.daysUnder}</p>
              </div>
              <div className="timerBG botTimer botTimerFlip statusDaysBot offBot">
                <p className="timer timerBot timerDay">{this.state.daysUnder}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip statusDaysTop offTop">
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
                <p className="timer timerTop timerDay">{this.state.hoursUnder}</p>
              </div>
              <div className="timerBG botTimer botTimerFlip statusHrBot offBot">
                <p className="timer timerBot timerDay">{this.state.hoursUnder}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip statusHrTop offTop">
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
                <p className="timer timerTop timerDay">{this.state.minutesUnder}</p>
              </div>
              <div className="timerBG botTimer botTimerFlip statusMinBot offBot">
                <p className="timer timerBot timerDay">{this.state.minutesUnder}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip statusMinTop offTop">
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
              <div className="timerBG botTimer botTimerFlip statusSecBot offBot">
                <p className="timer timerBot timerDay">{this.state.secondsUnder}</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="timerBG topTimer topTimerFlip statusSecTop offTop">
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
