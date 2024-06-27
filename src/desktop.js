import "./Desktop.css";
import "./btn.css"
import "./global.css";
import "./myproject.css";
import React, {useEffect,useRef } from 'react';
import Loader from "./Loader";
import Project from "./projects";
import Cup from "./Cup";
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import Contacts from "./Contacts";
import { useInView } from "react-intersection-observer";

function update(event){
    const container = document.querySelector(".grid");

	/* get the cursor position */
	const { clientX, clientY } = event;
	
	/* find the center of the window */
	const centerX = window.innerWidth *0.7;
	const centerY = window.innerHeight *0.5;
	
	/* get the cursor distance from the center in px */
	const offsetX = clientX - centerX;
	const offsetY = clientY - centerY;
	
	/* convert the px value into a -1 to +1 ratio */
	const ratioX  = offsetX / centerX;
	const ratioY  = offsetY / centerY;

	/* store that ratio in the CSS for use as a multiplier in the transforms */
	container.style.setProperty("--x", ratioX);
	container.style.setProperty("--y", ratioY);
}// update



var mousedownat=0;
const Desktop = ({ className = "" }) => {
    const{ref: myRef ,inView: aboutIsVisible} = useInView();
    const{ref: bigbull ,inView: bigbullIsVisible} = useInView();
    const{ref: cantstop ,inView: cantstopIsVisible} = useInView();
    const{ref: zombiechase ,inView: zombiechaseIsVisible} = useInView();

    const tracks =document.getElementsByClassName('image-track')
    const track = document.getElementById('image-track')

    useEffect(() => {
        window.addEventListener("mousemove", update);
        window.onmousedown = e=>{
          for(const track of tracks){
            if(track.dataset.visible==1){
              track.dataset.mouseDownAt = e.clientX;
            }
          }
        }
        window.onmouseup = e=>{
          for(const track of tracks){
            if(track.dataset.visible==1){
              track.dataset.mouseDownAt = "0";
              track.dataset.prevPercentage = track.dataset.percentage;  
              console.log(track.dataset.percentage)
            }
          }
         
        }
        window.onmousemove = e =>{
          for(const track of tracks){
            if(track.dataset.visible==1){
              if(track.dataset.mouseDownAt =="0")return;
              const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
              maxDelta = window.innerWidth/1.5;
              var percentage = (mouseDelta / maxDelta *-100),
              nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
              if(nextPercentage>0){nextPercentage=0;}
              if(nextPercentage<-70){nextPercentage =-70;}
              track.dataset.percentage = nextPercentage;
              track.animate({transform :`translate(${nextPercentage}%,50%)`},{duration:1800, fill: "forwards"});
              for(const image of track.getElementsByClassName('image')){
                image.animate({objectPosition :`${nextPercentage *100/-70}% 50%`},{duration:1800, fill:"forwards"})
              }
            }
          }

        }
    });
       
     
  return (
  <div >

<link href='https://fonts.googleapis.com/css?family=Vibur:400' rel='stylesheet' type='text/css'/>
    <div className="loader-page">
        <Loader/>
        <Cup/>

    </div>
    
    <div className={`desktop-1`} >
    <div className="contact">
      <Contacts/>
    </div>
    
    <Parallax pages={8.35} style={{height:"750px"}}>

      <ParallaxLayer sticky={{start:0,end:1}}>
      <a href="mailto:lvpanchal@mun.ca?Subject=Hi%20Lokesh%21%20I%20would%20like%20to%20hire%20you" className="hire-me" style={{textDecoration:"none",color:"black"}}>
  hire me!
</a>

      </ParallaxLayer>
      <ParallaxLayer className ="avatar-comp" sticky={{start:0 , end:1.1}}>
      <img className="image-1-icon" src="/avatar-bg.png" />
      <div className="avatar">
        <img className="avatars-default-1-1"  alt="" src="/avatar.png"/>
        <div class="grid">
          <div class="pane"></div>
          <div class="pane"></div>
        </div>
      </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={2.1}>
      <div className="hi-my-name-container">
        <p className="hi-my">Hello  World! </p>
        <p className="name-is">My name is</p>
      </div>
      <b className="lokesh">Lokesh.</b>
      <Cup/>
      </ParallaxLayer>
    
    <ParallaxLayer offset={0} speed={1.7}>

      <div className="i-am-a-container">
        <p className="name-is">I am a computer science student at</p>
        <p className="name-is">
          Memorial University of Newfoundland, St. John’s NL
        </p>
      </div>
      </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.5}>
      <div className="desktop-1-item" />
      <div className="scroll">scroll</div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.4} >
      <div className="about-heading">
        About <span style={{color:"#5e43f3"}}>me.</span>
        <hr/>
      </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1.5}> 
      <div className={`about ${aboutIsVisible? 'aboutAnimate' :''}`}  >
      I am your friendly neighborhood Computer Science enthusiast
      and I'm on a quest to master the art of full-stack web development,
      <span style={{color:"#5e43f3"}}> one line of code at a time. </span>
       Recently, I've also started diving into the fascinating world of machine learning,
      expanding my skill set and exploring new horizons in technology.

      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.7} >
      <div className="work-together-heading">
        Let's work together<span style={{color:"#5e43f3"}}>.</span>
        <hr/>
      </div>
      </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.8}> 
      <div className="work-together" >
      I'm excited to collaborate on innovative projects and bring ideas to life.
      With expertise in full-stack web development and a growing interest in machine learning,
      I'm ready to tackle new challenges. If you're looking for a passionate developer to join your team or help with a project, let's connect! 

      </div>
    </ParallaxLayer>
    <div className="projects-section">
          <ParallaxLayer offset={2.5}>
            <div style={{display:"flex", alignContent:"center"}}>
              <img className ="cloud1" src="/images/myproject/bg.png" style={{width:"46rem"}}></img>
              <img className="parts" id="part1" src="/images/myproject/part1.png"></img>
              <img className="parts" id="part2" src="/images/myproject/part2.png"></img>
              <img className="parts" id="part3" src="/images/myproject/part3.png"></img>
              <img className="parts" id="part4" src="/images/myproject/part4.png"></img>
              <img className="parts" id="part5" src="/images/myproject/part5.png"></img>
              <img className="parts" id="part6" src="/images/myproject/part6.png"></img>
              <img className="parts" id="part7" src="/images/myproject/part7.png"></img>
              <img className="parts" id="part8" src="/images/myproject/part8.png"></img>
              <img className="parts" id="part9" src="/images/myproject/part9.png"></img>
              <img className="parts" id="part10" src="/images/myproject/part10.png"></img>





              <div className="myProjects">My projects<span style={{color:"#5e43f3"}}>.</span></div>

           </div>
            
          </ParallaxLayer>
          
        <div className="projects">
        <ParallaxLayer offset={3.7}>
          <div className="project">
            
          {/* <div  className="sliding-img"> */}
              <div ref={bigbull} className="image-track" data-mouse-down-at="0" data-prev-percentage= "0" data-visible ={`${bigbullIsVisible? 1 :0}`} draggable="false">
                <img alt="" className="image" src="/images/bigbull/1.png" draggable="false"/>
                <img alt=""  className="image" src="/images/bigbull/2.png"draggable="false"/>
                <img alt="" className="image"  src="/images/bigbull/3.png"draggable="false"/>
                <img alt="" className="image"  src="/images/bigbull/4.png"draggable="false"/>
                <img alt="" className="image"  src="/images/bigbull/5.png"draggable="false"/>
                <img alt="" className="image" src="/images/bigbull/6.png"draggable="false"/>
                <img alt="" className="image"  src="/images/bigbull/7.png"draggable="false"/>
              </div>
                
            {/* </div> */}
          <div className="project-card">
              <div className="project-card-heading">
                <div> The Big Bull <hr/> </div>
                
                <div className="project-tech"> <br/>-JavaScript, HTML, CSS, MongoDB, Node.js, Express.js, Ajax, Axios, Mocha.</div>
              </div>
             
              <div className="project-details">
                <div style={{width:"60vw"}}>
                  The Big Bull is an interactive stock trading web application designed to simulate real-world trading and enhance learning without financial risk. It features real-time stock data, user authentication, portfolio management, watchlists, a trading panel for buying and selling stocks, and a competitive leaderboard to track user performance.

                </div>
                <div style={{width:"10vw"}}>
                  <a href="https://github.com/cypher2509/big-bull.git">
                    <div class="button-icon">
                      <div class="icon">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                            fill="#222229"
                          ></path>
                        </svg>
                      </div>
                      <div class="cube">
                        <span class="side front">hover me</span>
                        <span class="side top">check it on github</span>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </ParallaxLayer>
          <ParallaxLayer offset={5}>
          <div className="project">
          <div ref={cantstop} id="cantstop" className="image-track" data-mouse-down-at="0" data-prev-percentage= "0" data-visible={`${cantstopIsVisible? 1:0}`} draggable="false">
                <img alt="" className="image" src="/images/cantstop/1.png" draggable="false"/>
                <img alt=""  className="image" src="/images/cantstop/2.png"draggable="false"/>
                <img alt="" className="image"  src="/images/cantstop/3.png"draggable="false"/>
                <img alt="" className="image"  src="/images/cantstop/4.png"draggable="false"/>
                <img alt="" className="image"  src="/images/cantstop/5.png"draggable="false"/>
                <img alt="" className="image" src="/images/cantstop/6.png"draggable="false"/>
                <img alt="" className="image"  src="/images/cantstop/7.png"draggable="false"/>
              </div>

            <div className="project-card">
              <div className="project-card-heading">
                <div>
                Can't Stop
                  <hr/>
                </div>
                  
                  <div className="project-tech"><br/>- Java, Java Swing</div>
              </div>

              <div className="project-details">
              <div style={{width:"60vw"}}>
              Can't Stop is a virtual version of the popular board game, designed to provide an engaging and accessible gaming experience. Developed by a team of five for an academic project, the game features a non-human player for solo play, a color blind mode for enhanced accessibility, and adjustable difficulty levels to cater to all skill levels. Players can save their progress and load saved games, ensuring a seamless and enjoyable experience. 

              </div>
              <div style={{width:"10vw"}}>
                <a href="https://github.com/cypher2509/cantstop0315.git">
                <div class="button-icon">
                      <div class="icon">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                            fill="#222229"
                          ></path>
                        </svg>
                      </div>
                      <div class="cube">
                        <span class="side front">hover me</span>
                        <span class="side top">check it on github</span>
                      </div>
                    </div>
                </a>
              </div>
              </div>
            </div>
            {/* <div className="sliding-img">
              <div className='cantstop-slider img-slider' data-mouse-down-at="0">
                <img alt="" src="/images/cantstop/7.png"/>
                <img alt="" src="/images/cantstop/6.png"/>
                <img alt="" src="/images/cantstop/5.png"/>
                <img alt="" src="/images/cantstop/4.png"/>
                <img alt="" src="/images/cantstop/3.png"/>
                <img alt="" src="/images/cantstop/2.png"/>
                <img alt="" src="/images/cantstop/1.png"/>
              </div>
            </div> */}
           
          </div>
      </ParallaxLayer>

      <ParallaxLayer offset={6.2}>    
        <div className="project">
            {/* <div className="sliding-img">
                <div className='img-slider zombie-slider' data-mouse-down-at="0">
                <img alt="" src="/images/zombiechase/1.png"/>
                <img alt="" src="/images/zombiechase/2.png"/>
                <img alt="" src="/images/zombiechase/3.png"/>
                <img alt="" src="/images/zombiechase/4.png"/>

                </div>
                
            </div> */}
              <div ref={zombiechase} id="zombiechase" className="image-track" data-mouse-down-at="0" data-prev-percentage= "0" draggable="false" data-visible={`${zombiechaseIsVisible? 1 :0}`}>
                <img alt="" className="image" src="/images/zombiechase/1.png" draggable="false"/>
                <img alt=""  className="image" src="/images/zombiechase/2.png"draggable="false"/>
                <img alt="" className="image"  src="/images/zombiechase/3.png"draggable="false"/>
                <img alt="" className="image"  src="/images/zombiechase/4.png"draggable="false"/>
                <img alt="" className="image"  src="/images/zombiechase/5.png"draggable="false"/>
                <img alt="" className="image" src="/images/zombiechase/6.png"draggable="false"/>
                <img alt="" className="image"  src="/images/zombiechase/7.png"draggable="false"/>
              </div>
            <div className="project-card">
              <div className="project-card-heading">
                <div>
                  Zombie chase
                  <hr/>
                </div>
                <div className="project-tech"><br/>-Unreal engine </div>
              </div>

              <div className="project-details">
              <div style={{width:"60vw"}}>
                Zombie Chase is an action-packed shooting game developed in Unreal Engine using Blueprints. In this thrilling game, players must cross a zombie-infested bridge, picking up weapons and battling hordes of zombies along the way. HealthKits are strategically placed to help players restore their health and continue their journey. With immersive graphics and intense gameplay, Zombie Chase offers an exhilarating experience for all zombie survival enthusiasts.
              </div>
  
              <div style={{width:"10vw"}}>
              <a href="https://drive.google.com/drive/u/1/folders/1wlHiXTjLhlzzFs8ukyecNVfQJmLCbBLx">
              <div class="button-icon">
                      <div class="icon">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                            fill="#222229"
                          ></path>
                        </svg>
                      </div>
                      <div class="cube">
                        <span class="side front">hover me</span>
                        <span class="side top">check it on Drive</span>
                      </div>
                    </div>
              </a>
             
              </div>

              </div>



            </div>
             
        </div>
      </ParallaxLayer>

            
        </div>
      </div>
    <ParallaxLayer offset={7.5} speed={1}>
    {/* <div ref={myRef} className={`about ${aboutIsVisible? 'aboutAnimate' :''}`}  >
      {aboutIsVisible?'yes':'no'}
           </div> */}
      <div className="skills-heading">Skills <hr/></div>
      <div className="skills">
        <img className="skill-img" src="/images/skills/0.png"></img>
        <img className="skill-img" src="/images/skills/1.png"></img>
        <img className="skill-img" src="/images/skills/2.png"></img>
        <img className="skill-img" src="/images/skills/3.png"></img>
        <img className="skill-img" src="/images/skills/4.png"></img>
        <img className="skill-img" id="mongodb-img" src="/images/skills/5.png"></img>
        <img className="skill-img" src="/images/skills/6.png"></img>
        <img className="skill-img" src="/images/skills/7.png"></img>
        <img className="skill-img" src="/images/skills/8.png"></img>
        <img className="skill-img" src="/images/skills/9.png"></img>
        <img className="skill-img" src="/images/skills/10.png"></img>
      </div>



    </ParallaxLayer>

      </Parallax>

    </div>

    </div>
  );
  
};


export default Desktop;
