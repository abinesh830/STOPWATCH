import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'


const App = () => {
const[time,settime]=useState(0)


  const[running,setrunning]=useState(-1)

  useEffect(()=>{
    let intervel;
    if(running===1){
      intervel=setInterval(()=>{
        settime((prevtime)=>prevtime+100);
      },100)
     



      

    }

   
    return()=> clearInterval(intervel);


  },[running])

  const timing=(milliseconds)=>{
    const hr=Math.floor(milliseconds / 3600000).toString().padStart(2,'0');
    const mins=Math.floor((milliseconds % 3600000)/60000).toString().padStart(2,"0");
    const secs=Math.floor((milliseconds % 60000)/1000).toString().padStart(2,'0');
    const ms=Math.floor((milliseconds % 1000)/10).toString().padStart(2,'0');

    return `${hr}:${mins}:${secs}.${ms}`;
  }




  return (
    <div className='App'>


      {/* desktop and laptop and tap mode  */}
      <div className='container d-none d-lg-block d-md-block border border-white h-75 bg-dark py-5'>
        <div className='row pt-5'>

          <div className='col-lg-12 col-12'>
            <h1 className='container bg-dark  text-primary '>STOPWATCH</h1>
            <h1 className='text-white'>
              {timing(time)}  
              <br/>

            </h1>
            <div className='d-flex justify-content-center'>
            <button className='btn-grad btn-success 'onClick={()=>setrunning(1)}>START</button>
            <button className='btn-grad1 ms-2' onClick={()=>setrunning(-1)}>STOP</button>
            <button className='btn-grad3 ms-2' onClick={()=>{settime(0);setrunning(-1)}}>RESTART</button>




            </div>
           
          </div>

        </div>

      </div>
      {/* end of laptop mode */}

      {/* start mobile view */}
      <div className='container bg-dark h-100 pt-5 d-lg-none d-md-none'>
        <div className='row pt-5 py-5 bg-warning border border-white mx-3'>
          <div className='col-12 pt-3'>
            <h1 className='bg-transparent text-primary text-center'>STOPWATCH</h1>
            <h1 className='text-white'>{timing(time)}</h1>
            <div className='d-flex justify-content-center '>
              <button className='btn btn-success' onClick={()=>setrunning(1)}>START</button>
              <button className='btn btn-danger ms-2' onClick={()=>setrunning(-1)}>STOP</button>
              <button className='btn btn-primary ms-2' onClick={()=>{settime(0);setrunning(-1)}}>RESTART</button>


            </div>
          </div>
          

        </div>

      </div>
      
    </div>
  )
}

export default App
