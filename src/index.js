import React from 'react';
import ReactDOM from 'react-dom';  
import './style.css'

class Timer extends React.Component{
  constructor(){
    super();
    this.state={
      time :new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(() => {
      this.setState({time:new Date().toLocaleTimeString()})
    }, 1000);
    return(
      <h2 className='timer'>
           
           it is  { new Date().toLocaleTimeString()}
        </h2>
    )
  }
}
class Hello extends React.Component{
  render(){
    return(
      <h1>سلام دوستان من</h1>
    )
  }
}


class App extends React.Component{
render(){
return ( 
    <div className='main'>
         <Hello/>
         <Timer/>
    </div>
  ) 
}
  
}

//let elem=new App()elem.render()
//const tick=()=>{ 
  ReactDOM.render(<App/>,document.getElementById('root'));
//}

//setInterval(() => {
//  tick();
//}, 1000);
