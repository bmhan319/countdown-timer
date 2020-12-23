import React, { Component } from 'react'

export default class Timer extends Component {
  componentDidMount() {
    window.onload = () => {
      document.querySelectorAll('.bbb').forEach( item => {
        item.classList.add('onTop')
      })
      document.querySelectorAll('.aaa').forEach( item => {
        item.classList.add('onBot')
      })
    }
  }

  render() {
    return (
      <div className="timerComponent">

        <div className="daysContainer">
          <div className="timeContainer daysTimer">
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">07</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">07</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">08</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">08</p>
              </div>
            </div>
          </div>
          <p className="timeText daysText">DAYS</p>
        </div>

        <div className="hrsContainer">
          <div className="timeContainer hrsTimer"> 
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">22</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">22</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">23</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">23</p>
              </div>
            </div>
          </div>
          <p className="timeText hrsText">HOURS</p>
        </div>

        <div className="minsContainer">
          <div className="timeContainer minsTimer">
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">54</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">54</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">55</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">55</p>
              </div>
            </div>
          </div>
          <p className="timeText minsText">MINUTES</p>
        </div>

        <div className="secsContainer">
          <div className="timeContainer secsTimer">
            <div className="underTimerContainer">
              <div className="timerBG topTimer">
                <p className="timer timerTop timerDay">40</p>
              </div>
              <div className="aaa timerBG botTimer botTimerFlip">
                <p className="timer timerBot timerDay">40</p>
              </div>
            </div>
            <div className="overTimerContainer">
              <div className="bbb timerBG topTimer topTimerFlip">
                <p className="timer timerTop timerDay">41</p>
              </div>
              <div className="timerBG botTimer">
                <p className="timer timerBot timerDay">41</p>
              </div>
            </div>
          </div>
          <p className="timeText secsText">SECONDS</p>
        </div>
        
      </div>
    )
  }
}
