import React, { Component } from 'react'

export default class Timer extends Component {
  // state are all time related fields
  // all time fields have an 'under' field that displays a number underneath when the timer flipper flips down
  // that underneath number is one less that the current displayed number
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

  // Master function that runs the timer
  timer = () => {
    // On/Off switch for the timer Flap position
    let timerFlapsSet = true

    // Sets state to countdown the timer every second
    setInterval( () => {
      this.setState({
        seconds: this.state.seconds - 1,
        secondsUnder: this.state.secondsUnder - 1,
        minutesUnder: this.state.minutes - 1,
        daysUnder: this.state.days - 1
      })
      this.timerCountDown()
    }, 1000)

    // Changes the timerFlaps position to on/off every half second
    // First half-second triggers animation to drop flaps down
    // Second half-second resets flaps back to start posistion with animation turned off to avoid seeing flaps move back upward.
    setInterval( ()=> {
      // Runs the timerFlaps for the 'seconds'
      (timerFlapsSet === true) ? this.flipTimerFlaps('.statusSecTop', '.statusSecBot') : this.resetTimerFlaps('.statusSecTop', '.statusSecBot')
      timerFlapsSet = !timerFlapsSet

      // Runs the timerFlaps for the 'minutes' when 'seconds' reaches 0
      this.resetTimeFields(this.state.seconds)

      // Runs the timerFlaps for the 'hours' when 'minutes' and 'seconds' reaches 0
      if (this.state.seconds === 0  && this.state.minutes === 0) {
        this.flipTimerFlaps('.statusHrTop', '.statusHrBot')
      } else {
        this.resetTimerFlaps('.statusHrTop', '.statusHrBot')
      }

      // Runs the timerFlaps for the 'days' when 'hours', 'minutes' and 'seconds' reaches 0
      if (this.state.seconds === 0  && this.state.minutes === 0 && this.state.hours === 0) {
        this.flipTimerFlaps('.statusDaysTop', '.statusDaysBot')
      } else {
        this.resetTimerFlaps('.statusDaysTop', '.statusDaysBot')
      }
    }, 500)
  }

  resetTimeFields = (field1, field2, field3) => {
    (field1 === 0) ? this.flipTimerFlaps('.statusMinTop', '.statusMinBot') : this.resetTimerFlaps('.statusMinTop', '.statusMinBot')
  }

  // Runs animation to flip the timer flaps down
  flipTimerFlaps = (top, bottom) => {
    document.querySelector(top).classList.remove('offTop')
    document.querySelector(top).classList.add('onTop')
    document.querySelector(bottom).classList.remove('offBot')
    document.querySelector(bottom).classList.add('onBot')
  }

  // Resets timer flaps back to the original position
  resetTimerFlaps = (top, bottom) => {
    document.querySelector(top).classList.remove('onTop')
    document.querySelector(top).classList.add('offTop')
    document.querySelector(bottom).classList.remove('onBot')
    document.querySelector(bottom).classList.add('offBot')
  }

  // Controls what the timer does when the various time fields reach 0
  timerCountDown = () => {
    // When 'secondsUnder' reaches less than 0, reset to 59
    if (this.state.secondsUnder < 0) {
      this.setState({
        secondsUnder: 59
      })
    }
    // When 'seconds' reaches less than 0, reset to 59
    if (this.state.seconds < 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59
      })
    }

    // When 'minutesUnder' reaches less than 0, reset to 59
    if (this.state.minutesUnder < 0) {
      this.setState({
        minutesUnder: 59
      })
    }
    // When 'minutes' reaches less than 0, reset to 59
    if (this.state.minutes < 0) {
      this.setState({
        hours: this.state.hours - 1,
        minutes: 59
      })
    }

    // When 'hoursUnder' reaches less than 0, reset to 23
    if (this.state.hoursUnder < 0) {
      this.setState({
        hoursUnder: 23
      })
    }
    // When 'hours' reaches less than 0, reset to 23
    if (this.state.hours < 0) {
      this.setState({
        days: this.state.days - 1,
        hours: 23,
      })
    }

    // When 'daysUnder' reaches less than 0, reset to 9
    if (this.state.daysUnder < 0) {
      this.setState({
        daysUnder: 9
      })
    }
    // When 'days' reaches less than 0, reset all fields back to default
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
