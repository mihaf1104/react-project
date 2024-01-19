import React,{useState,useEffect}  from "react";
//import ReactDOM  from "react-dom";
import Hello from "./Hello";
import Timer from "./Timer";
import './style.css'
import TimeList from "./TimeList";


const App=()=>{
     const [title , setTitle]=useState("سلام دوستان عزیز");
     const [isLight , setIsLight]=useState(false);
     const [timeArr,setTimeArr]=useState(["00 :05 : 12","01 : 15 :10","12 : 15 :10"]);
      const handleSetTitle=()=>{
        if (isLight)
        { setTitle("به کد یاد خوش امدید")}
        else
        {  setTitle("سلام دوستان عزیزم")}
      }
     const handleSetIsLight=()=>{
      setIsLight(!isLight)
      //console.log(isLight);
     }
     useEffect(()=>{
      handleSetTitle();
      return()=>
      {

      }
     },[isLight])
     return ( 
      
               <div className='main' style={{background:isLight?"white":"black"}}>
                    <Hello title={title}/>
                    <Timer 
                          isLight={isLight} 
                          handleSetIsLight={handleSetIsLight} 
                          handleSetTitle={handleSetTitle}
                          timeArr={timeArr}
                          setTimeArr={setTimeArr}
                    />
                    
               </div>
             )
}

export default App;



// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       title:"سلام دوستان عزیزم"
//     }
//     this.handleSetTitle1=this.handleSetTitle1.bind(this)
//   }

//   handleSetTitle=()=>{
//     this.setState({
//       title:"به کد یاد خوش آمدید"
//     })
//   }
//   handleSetTitle1(){
//     this.setState({
//       title:"به کد یاد خوش آمدید"
//     })
//   }
//   render(){
//     return ( 
//         <div className='main'>
//              <Hello title={this.state.title}/>
//              <Timer handleSetTitle={this.handleSetTitle}/>
//         </div>
//       ) 
//     }
// }


