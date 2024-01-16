import React  from "react";
//import ReactDOM  from "react-dom";
import Hello from "./Hello";
import Timer from "./Timer";
import './style.css'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"سلام دوستان عزیزم"
    }
    this.handleSetTitle1=this.handleSetTitle1.bind(this)
  }

  handleSetTitle=()=>{
    this.setState({
      title:"به کد یاد خوش آمدید"
    })
  }
  handleSetTitle1(){
    this.setState({
      title:"به کد یاد خوش آمدید"
    })
  }
  render(){
    return ( 
        <div className='main'>
             <Hello title={this.state.title}/>
             <Timer handleSetTitle={this.handleSetTitle}/>
        </div>
      ) 
    }
}

export default App;
