import React  from "react";
//import ReactDOM  from "react-dom";
import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time :new Date().toLocaleTimeString(),
        number:5
      }
    }

    componentDidMount()
    { 
     interval=setInterval(() => {
        this.setState({number:this.state.number-1})
      }, 1000);
    }
    componentDidUpdate(){
     if (this.state.number===0){
     clearInterval(interval)}
    }

    componentWillUnmount()
    {

    }
    render(){
      console.log("render");
      return(
        <>
        <h2 className='timer'>
             
             it is  { new Date().toLocaleTimeString()}
            
          </h2>
          <button onClick={this.props.handleSetTitle}>change</button>
          </>
      )
    }
  }

  export default Timer;