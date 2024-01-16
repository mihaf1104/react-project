import React  from "react";
import ReactDOM  from "react-dom";
import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time :new Date().toLocaleTimeString()
      }
    }

    componentDidMount()
    {
      console.log("didmount");
     interval=setInterval(() => {
        this.setState({time:new Date().toLocaleTimeString()})
      }, 1000);
    }
    componentDidUpdate(){
     if (this.state.time==="2:26:00 AM"){
     clearInterval(interval)}
    }

    componentWillUnmount()
    {

    }
    render(){
      console.log("render");
      return(
        <h2 className='timer'>
             
             it is  { new Date().toLocaleTimeString()}
          </h2>
      )
    }
  }

  export default Timer;