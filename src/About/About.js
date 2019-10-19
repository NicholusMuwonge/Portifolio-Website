import React from 'react';
import './About.scss';


class InfoPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='container-fluid info'>
                    <div className='sec'>
                        <div className='about'>
                            <h1 className='display-3 text-center'>Short Bio</h1>
                            <br/><br/><br/>
                            <p class="text-justify bio">Muwonge Nicholus is 
                            Full-Stack <span style={{fontWeight: 'bolder', color: 'teal'}}>Software Engineer </span> / <span style={{fontWeight: 'bolder', color: 'teal'}}>Web Developer
                            </span> . I build complex Software from ground up bringing just plain concept 
                            into reality. From a range of products,
                            I have been able to contribute to products with different professionals
                             to build software. My tool box that makes work happen includes,
                             Python, JavaScript and PHP. 
                            In my most Recent engagement working with Andela, I have been able to 
                            deliver more than 7 world class features to 
                            products like EzyAgric. I also contribute to Open Source Software via Wikimedia Foundation.<br/><br/>
                            My key drive for standing out of the crowd list pixel perfection 
                            to make sure user experience is excellent.
                            I currently seek for a perfect team or product for which I can 
                            deliever and put my expertise to good use. <br/><br/>

                             Outside work, I enjoy singing and watching mobile phone reviews .
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default InfoPage;