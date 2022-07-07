

import { useEffect, useState } from 'react';
import Aos from 'aos';
import './App.css'


function App() {


  const [count, setCount] = useState(0);
  const [mobile, setMobile] = useState(false);

//   const [url, setUrl] = useState("")

  const fileSelected = (event) => {
     setCount(event.target.files.length)
  }
  const getStarted = () => {

   if(mobile){
         let key = document.getElementById('key');
         key.focus();
   }
   else{
      let main = document.getElementById('scrollto');
      main.scrollIntoView();
   }
   
  }

//   const test  = (event) => {
//      let xxx = URL.createObjectURL(event.target.files[0]);
//      setUrl(xxx)
//      document.getElementById('#test').click()
//   }


  useEffect(() => {
      if(window.screen.width <= 992) setMobile(true)
  },[])
   

  return (
    <div className="App">
       <div data-aos="fade-right" data-aos-duration="1500" className='container app-name'>  <h1 >Smart Finder <img src='./img/search.png'></img></h1></div>
       <div className='container app-description'>Bringing to you the most efficient way to search anything on your device just by a <span>keyword</span></div>
       <div className='container how-it-works'>
          <h6>How it Works ??</h6>
          <div className='row justify-content-center' >
             <div className='col col-sm-4 step-1' data-aos="zoom-in" data-aos-duration="500">
                <h3>STEP 01</h3>
                <img src='./img/search-engine.png'></img>
                <h5>Enter Keyword</h5>
             </div>
             <div className='col col-sm-4 step-2' data-aos="zoom-in" data-aos-duration="500">
                <h3>STEP 02</h3>
                <img src='./img/folder.png'></img>
                <h5>Select {mobile ? "Files" : "Folder"}</h5>
             </div>
             <div className='col col-sm-4 step-3' data-aos="zoom-in" data-aos-duration="500">
                <h3>STEP 03</h3>
                <img src='./img/task.png'></img>
                <h5>Get Results</h5>
             </div>
          </div>
       </div>

       <div className="container_mouse">
          <span className="mouse-btn">
              <span className="mouse-scroll"></span>
          </span> 
      </div>

      <div className='get-started'>
        <button className="cssbuttons-io-button" onClick={() => getStarted()}> Get started
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
          </div>
        </button>
       </div>


       <div id='main'>
           <h3> Enter Keyword :  <input type="text" id="key" placeholder="Enter keyword"></input></h3>
           
           {mobile ? 
               <label for="file_id" className='select-folder'>
                   Select Files
               </label>
            :
             <div>
               <label for="file_id" className='select-folder'>
                  Select Files
               </label>
                  or
               <label for="filepicker" className='select-folder'>
                  Select Folder
               </label>
              </div>
           }
           {count === 0 ? <></> : <span style={{marginLeft:"10px"}}>{count} files selected</span>}

          
            <div className="progress" style={{display:"none"}}>
               <div id="dynamic" className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}}>
                  <span id="current-progress">20% Scanned</span>
               </div>
            </div>
       
            <div className='search-result' id='scrollto'>
               <h4 style={{textAlign:"center"}}>Keyword found at <span id='counter'>0</span> locations :: </h4>
               <ul className="list-group" id='lg'>
                  {/* <li className="list-group-item">abc.pdf</li> */}
                  
               </ul>
           </div>

           <div style ={{marginTop:"100px"}}>Made with &#9829; by   <a  id='nitish' href='https://www.linkedin.com/in/nitish-kumar-gupta-3250bb214/' target="_blank">Nitish</a> , <a id='himanshu' href='https://www.linkedin.com/in/himanshu-ranjan-542857190/' target="_blank" >Himanshu</a> and <a id='yash'  href='https://www.linkedin.com/in/yash-kr/' target="_blank"> Yash</a></div>
        {/* <input type="file" onChange={(event) => test(event) }></input>
        */}
        {/* <a href={url} download id='test'>Click to dowwnload</a> */}
       </div>

     

    </div>
  );
}

export default App;
