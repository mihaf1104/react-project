import React from 'react';
import ReactDOM from 'react-dom';  


let elem=<h1>سلام دوستان عزیز</h1>

const tick=()=>{
  const item=(
    <div>
        <h1>میهاف سلام</h1>
        <h2>
           
           it is  {new Date().toLocaleTimeString()=="12:07:15 PM"?clearInterval : new Date().toLocaleTimeString()}
        </h2>
    </div>
  )
  ReactDOM.render(item,document.getElementById('root'));
}

setInterval(() => {
  tick();
}, 1000);
