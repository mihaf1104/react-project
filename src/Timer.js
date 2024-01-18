import React  from "react";
//import ReactDOM  from "react-dom";
import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time :5 
      }
    }
    startInterval=()=>{
      interval=setInterval(() => {
        this.setState(
          {
            time:(this.state.time-1)<0 ?0:this.state.time-1
          }
        )
      }, 1000);
    }

    resetInterval=()=>{
      this.setState({time:5})
    }
    stopInterval=()=>{
      clearInterval(interval)
    }
    componentDidMount()//شروع کامپوننت
    { 
     this.startInterval();
    }
    componentDidUpdate()//وقتی مقدار استیت تغییر میکند
    {
     if (this.state.number===0){
            this.clearInterval()}
    }

    componentWillUnmount()
    {

    }
    render(){
      
      return(
         <>
         <h2 className='timer'>
             {this.state.time}
          </h2>
          {/* <button onClick={this.props.handleSetTitle}>change</button>*/}

           <div className="button_box">
               <spam className="action_button start_burtton" onClick={this.startInterval} >Start</spam>
               <spam className="action_button stop_burtton" onClick={this.stopInterval}>Stop</spam>
               <spam className="action_button reset_burtton" onClick={this.resetInterval}>Reset</spam>
           </div>
          </>
      )
    }
  }

  export default Timer;