import {Component} from 'react'
import './index.css'
class Stopwatch extends Component {
  state = {time: 0}
  formattime = time => {
    const min = Math.floor(time / 60)
    const sec = time % 60
    const minutes = min < 10 ? '0' + min : min
    const seconds = sec < 10 ? '0' + sec : sec
    return `${minutes}:${seconds}`
  }

  timeid = setInterval(this.start, 1000)

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.increment, 1000)
    }
  }
  increment = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }
  stop = () => {
    clearInterval(this.timerId)
  }
  reset = () => {
    this.stop()
    this.setState({time: 0})
  }

  render() {
    const {time} = this.state
    return (
      <div class="timer-container">
        <div className="clockcontainer">
          
          <h1 className="clockheading">Timer</h1>
        </div>
        <p className="para">{this.formattime(time)}</p>
        <div className="buttoncontainer">
          <button className="startbutton" onClick={this.start}>
            Start
          </button>
          <button className="stopbutton" onClick={this.stop}>
            Stop
          </button>
          <button className="resetbutton" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}
export default Stopwatch
