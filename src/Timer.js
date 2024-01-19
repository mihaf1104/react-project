import React from "react";
//import ReactDOM  from "react-dom";
import './style.css'
import TimeList from "./TimeList";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false
    }
  }
  startInterval = () => {
    if (this.state.isStart === false) {
      this.setState({ isStart: true })
      interval = setInterval(() => {
        this.setState({ second: this.state.second + 1 })
        if (this.state.second === 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1
          })
        }
        if (this.state.minute === 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1
          })
        }
      }, 1000);
    }
  }

  resetInterval = () => {
    this.setState({ hour: 0, minute: 0, second: 0 })
    this.stopInterval()
  }
  stopInterval = () => {
    this.setState({ isStart: false })
    clearInterval(interval)
  }
  HandleSaveTime=()=>{
    let h = this.state.hour.toString().padStart(2, '0')
    let m = this.state.minute.toString().padStart(2, '0')
    let s = this.state.second.toString().padStart(2, '0')
    let newTime=`${h} : ${m} : ${s}`;
    this.props.setTimeArr([...this.props.timeArr,newTime]);
  }
  render() {
    let h = this.state.hour.toString().padStart(2, '0')
    let m = this.state.minute.toString().padStart(2, '0')
    let s = this.state.second.toString().padStart(2, '0')
    return (
      <>
        <h2 className='timer' onClick={this.HandleSaveTime}>
          {`${h} : ${m} : ${s}`}
        </h2>
        {/* <button onClick={this.props.handleSetTitle}>change</button>*/}

        <div className="button_box">
          <spam className="action_button start_burtton" onClick={this.startInterval} >Start</spam>
          <spam className="action_button stop_burtton" onClick={this.stopInterval}>Stop</spam>
          <spam className="action_button reset_burtton" onClick={this.resetInterval}>Reset</spam>
          <spam className="action_button reset_burtton"
            style={{
              background: this.props.isLight ? "black" : "white"
              , color: this.props.isLight ? "white" : "black"
            }} onClick={this.props.handleSetIsLight}>
            {this.props.isLight ? "Dark" : "Light"}
          </spam> 
        </div>
        <TimeList>
               {this.props.timeArr}
          </TimeList>
      </>
    )
  }
}

export default Timer;