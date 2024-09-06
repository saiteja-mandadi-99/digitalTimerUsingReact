// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: 25, isTimerStart: false}
  onIncreaseTimer = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }
  onDecreaseTimer = () => {
    this.setState(prevState => ({time: prevState.time - 1}))
  }

  onClickStartBtn = () => {
    this.setState(prevState => {
      const {isTimerStart} = prevState
      return {
        isTimerStart: !isTimerStart,
      }
    })
  }

  onClickResetBtn = () => {
    this.setState({time: 25, isTimerStart: false})
  }

  render() {
    const {time, isTimerStart} = this.state
    const timerText = isTimerStart ? 'Running' : 'Paused'
    const startBtnText = isTimerStart ? 'Pause' : 'Start'
    const startImageUrl = isTimerStart
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startImageAltName = isTimerStart ? 'pause icon' : 'play icon'

    return (
      <div className="appContainer">
        <h1>Digital Timer</h1>
        <div className="timerAppContainer">
          <div className="timeContainer">
            <div className="time">
              <p>{timerText}</p>
            </div>
          </div>
          <div className="start-reset-limitContainer">
            <div className="start-resetContainer">
              <button className="BtnContainer" onClick={this.onClickStartBtn}>
                <img
                  src={startImageUrl}
                  alt={startImageAltName}
                  className="image"
                />
                <p className="imageTitle">{startBtnText}</p>
              </button>
              <button className="BtnContainer" onClick={this.onClickResetBtn}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="image"
                />
                <p className="imageTitle">Reset</p>
              </button>
            </div>
            <div className="increaseorDecreaseTimerContainer">
              <p>Set Timer Limit</p>
              <div className="setLimitContainer">
                <button
                  className="button"
                  type="button"
                  onClick={this.onDecreaseTimer}
                >
                  -
                </button>
                <p className="timeCount">{time}</p>
                <button
                  className="button"
                  type="button"
                  onClick={this.onIncreaseTimer}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
