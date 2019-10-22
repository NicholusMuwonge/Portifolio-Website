import React from 'react';
import './Potifolio.scss';
import l from './large.JPG';
import p from './phone.JPG';
import Ah from './Ah.JPG';
import I from './Ireporter.JPG';
import ez from './ez.JPG';
import fire from './fyyur.jpg';
import url from './UrlShort.JPG';


class Potifolio extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="work container-fluid">
                    <h2 className='display-4 text-center'>My Works</h2>
                    <br/><br/><hr/><br/>
                    <div className='container-fluid'>
                    <div class="card-columns car">
  <div class="card first">
    <div class="card-body">
      <h5 class="card-title">Here we are. Browse Around !</h5>
      <p class="card-text">If you find something that you'd like to discuss further about , please hit me up. Lets talk in detail</p>
    </div>
  </div>
  <div class="card wheat">
    <img class="card-img-top" src={Ah} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title text-center">Authors Haven</h5>
      <p class="card-text">Authors Haven is Medium clone on which I contributed with a team of brilliant Engineers at Andela. <br/>
      This is one of those projects that gave me exposure to working in an Agile setting, working in a team and code reviews.<br/><br/>I worked
      on the create and retrieve profile feature and also the homepage as per the Product owner's instructions. <br/><br/>

      This Product Focuses on Implementing React and Redux not the design, so some of the work may not be so visually attractive and responsive.Its best tested out on the desktop

      <br/>
      <br/>Project was Written In:
       </p><hr/>
       React ,Redux , Python(Django), HTML, CSS
       <br/><br/>
       <span class="card-text" style={{fontSize:'14px', border:'yellow 0.5px solid', padding: '10px'}}><a href="https://github.com/andela/ah-frontend-space" target='tab' style={{color:'#edf5e1'}}>View Code on Github</a></span>
      <br/><br/>
      <p class="card-text"  style={{textDecoration:'overline'}}><a href="https://ah-frontend-space-staging.herokuapp.com/signup" target='tab' style={{color:'#edf5e1'}}>Visit Website</a></p>
    </div>
  </div>
  <div class="card purple">
    <img class="card-img-top" src={l} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title text-center">Portifolio Website</h5>
      <p class="card-text">This is my personal website showcasing my work. <br/><br/>
      This website is supported on smartphones, tablets and laptops. </p>
      <br/>Project was Written In:
       <br/><hr/>
       React, HTML, CSS
       <br/><br/>
      <span class="card-text" style={{fontSize:'14px', border:'yellow 0.5px solid', padding: '10px'}}><a href="https://github.com/NicholusMuwonge/Portifolio-Website/" target='tab' style={{color:'#edf5e1'}}>View Code on Github</a></span>
      <br/><br/>
      <p class="card-text"  style={{textDecoration:'overline'}}><a href="bit.ly/nicksbro" target='tab' style={{color:'#edf5e1'}}>Visit Website</a></p>
    </div>
  </div>

  <div class="card purple">
    <img class="card-img-top" src={url} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title text-center">UrlShortner</h5>
      <p class="card-text">
      This is a URL shortening application I worked on as a challenge for the FrontEnd Mentor.
      Its main Purppose was to equip me with an understanding of React Hooks and Minimalistic Designs.<br/>
      <br/>
      Its consuming a rel.ink Backend Api for shortening URLs.
      Its certainly not complete to the bottom with a lot of dummy URLs but still achieves its primary role.
      <br/>
      <br/>
      <br/>Project was Written In:
       </p><hr/>
       React ,React Hooks ,HTML, CSS, BootStrap
       <br/><br/>
       <span class="card-text" style={{fontSize:'14px', border:'yellow 0.5px solid', padding: '10px'}}><a href="https://github.com/NicholusMuwonge/Url-shortner-React" target='tab' style={{color:'#edf5e1'}}>View Code on Github</a></span>
      <br/><br/>
      <p class="card-text"  style={{textDecoration:'overline'}}><a href="https://re-short.herokuapp.com/" target='tab' style={{color:'#edf5e1'}}>Visit Website</a></p>
    </div>
  </div>

  <div class="card lean">
    <img class="card-img-top" src={I} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title text-center">Ireporter</h5>
      <p class="card-text">
      Its is an application geared towards helping people in their respective communities get their voice to the necessary authorities<br/>
      Ireporter is a personal improvement application built in a bootcamp at Andela.
      <br/>The backend is fully functional though only signup, login, and get records are the only functional features in the frontend visible to end user.
      <br/>
      <br/>Project was Written In:
       </p><hr/>
       React ,Redux , Python(Django), HTML, CSS
       <br/><br/>
       <span class="card-text" style={{fontSize:'14px', border:'yellow 0.5px solid', padding: '10px'}}><a href="https://github.com/NicholusMuwonge/ireporterReact/tree/ft-setting-up-reactproject-167615518" target='tab' style={{color:'#edf5e1'}}>View Code on Github</a></span>
      <br/><br/>
      <p class="card-text"  style={{textDecoration:'overline'}}><a href="https://reactireporter.herokuapp.com/" target='tab' style={{color:'#edf5e1'}}>Visit Website</a></p>
    </div>
  </div>

  <div class="card plum">
    <img class="card-img-top" src={fire} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title text-center">Fyyur App</h5>
      <p class="card-text">
          Fyyur(Fire) is an assignment I worked on while pursuing my Udacity Nano degree.
          <br/><br/>
          This is an artist and venue booking platform. any artist can book an available venue , list if he is seeking for any talent
          and also his past shows will be listed. Similarly, the A venue owner can be able to create a venue that can be booked by an artist for a show.
          <br/><br/>
          One can create a show  only using a valid ArtistId or valid VenueId
      <br/>
      <br/>Project was Written In:
       </p><hr/>
       Vanilla JavaScript, Python(Flask), HTML, CSS, SQLAlchemy, Postgresql
       <br/><br/>
       <span class="card-text" style={{fontSize:'14px', border:'yellow 0.5px solid', padding: '10px'}}><a href="https://github.com/NicholusMuwonge/Fyyur-Application" target='tab' style={{color:'#edf5e1'}}>View Code on Github</a></span>
      <br/><br/>
      <p class="card-text"  style={{textDecoration:'overline'}}><a href="http://fyyur-app.herokuapp.com/" target='tab' style={{color:'#edf5e1'}}>Visit Website</a></p>
    </div>
  </div>

  <div class="card ez">
    <img class="card-img-top" src={ez} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title text-center">EzyAgric</h5>
      <p class="card-text">
      Its is an agricultural-tech application that links farmers to the best resources right from clearing the land to harvesting<br/>
      I contributed to more that four fullstack features working with a fully distributed and remote team all over Africa. ts on this product that I was 
      able to first put out work used for commercial basis. I worked on the product before its initial launch.
      <br/>
      <br/>Project was Written In:
       </p><hr/>
       Angular , PHP(Lumen), HTML, CSS
       <br/><br/>
      <br/><br/>
      <p class="card-text"  style={{textDecoration:'overline'}}><a href="https://ezyagric.com/" target='tab' style={{color:'#edf5e1'}}>Visit Website</a></p>
    </div>
  </div>
 
</div>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Potifolio;