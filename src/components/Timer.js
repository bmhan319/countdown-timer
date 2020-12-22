import React, { Component } from 'react'

export default class Timer extends Component {
  render() {
    return (
      <div className="timerComponent">

        <div className="daysContainer">
          <div className="timeContainer daysTimer">
            <div className="timerBG topTimer">
              <p className="timer timerTop timerDay">08</p>
            </div>
            <div className="timerBG botTimer">
              <p className="timer timerBot timerDay">08</p>
            </div>
          </div>
          <p className="timeText daysText">DAYS</p>
        </div>

        <div className="hrsContainer">
          <div className="timeContainer hrsTimer">
            <div className="timerBG topTimer">
              <p className="timer timerTop timerDay">23</p>
            </div>
            <div className="timerBG botTimer">
              <p className="timer timerBot timerDay">23</p>
            </div>
          </div>
          <p className="timeText hrsText">HOURS</p>
        </div>

        <div className="minsContainer">
          <div className="timeContainer minsTimer">
            <div className="timerBG topTimer">
              <p className="timer timerTop timerDay">55</p>
            </div>
            <div className="timerBG botTimer">
              <p className="timer timerBot timerDay">55</p>
            </div>
          </div>
          <p className="timeText minsText">MINUTES</p>
        </div>

        <div className="secsContainer">
          <div className="timeContainer secsTimer">
            <div className="timerBG topTimer">
              <p className="timer timerTop timerDay">41</p>
            </div>
            <div className="timerBG botTimer">
              <p className="timer timerBot timerDay">41</p>
            </div>
          </div>
          <p className="timeText secsText">SECONDS</p>
        </div>
        
      </div>
    )
  }
}
