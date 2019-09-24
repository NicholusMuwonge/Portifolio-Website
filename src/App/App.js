import React from 'react';
import logo from './nicks.png';
import bl from './black.png';
import './App.scss';
import Nav from "../Navbar/navbar"

function App() {
  return (
      <React.Fragment>
      <div className="container-fluid">
        <header className="App-headers container-fluid">
          <div className="row">
          <div className="welcome col-sm-8 col-xs-8">nicks<span style={{color:"red"}}>.</span>
          </div>
          <div className="navcontainer col-md-4 col-xs-4"><Nav /></div>
          
          </div>
        </header>
        <br/><br/><br/><br/>
        <div className="intro row">
          <div className="col-bg-8 col-xs-8">
            <span id="meet">
              meet </span>
              <span className="dot">...</span><br/>
              <span className="name">Nicholus</span><br/>
              <span className="name">Muwonge<span class="dot">.</span></span>
              <br/><br/>
              <span className="slogan"> " One Of The Best Software Engineers & <br/> 
              <span id="nl">Code Bugs Bounty Hunter ."<br/>
                <span style={{fontWeight:"bolder", marginLeft:"2px"}}>- Mama Says</span>
              </span></span>
          </div>
          <div className="new col-md-6">
            <img src={bl} alt="" className="img"/>
          </div>
          <div>
          <div className="col-md-12">
            <button className="btn btn-lg tour" style={{
              background: "none", color:"yellow", border:"yellow 1px solid", marginTop:"2em"}}
              >Take A Tour</button>
          </div>
          </div>
        </div>
        </div>
        
    </React.Fragment>
  );
}

export default App;
