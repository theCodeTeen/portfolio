import {useRef, useState, useEffect} from 'react';
import classes from './Skillset.module.css';
import mypic from './../../../assets/images/mypic.jpg';
import { useNavigate } from 'react-router-dom';
const Skillset=(props)=>{
    const skillset__content=useRef();
    const skillset__cover=useRef();
    const skillset__container=useRef();

    const [cmdLines,setCmdLines]=useState([
        'Dharmik Doors [Version:10.0.18320.1256] <br/> (c) 2021 Dharmik Bhanushali. All rights reserved.',
        'click on skills listed on side panel to know more'
    ]);
    const [textContent,setTextContent]= useState('');
    useEffect(()=>{
        let interval = checkForMovements();
        return ()=>{
            clearInterval(interval);
        }
    },[cmdLines]);

    useEffect(()=>{
        skillset__container.current.style.opacity=1;
    },[]);
    let x=0,y=0;
    function checkForMovements(){
        console.log("setting interval");
        return setInterval(movements,66);
    }

    function movements(event){
    
        // skillset__cover.current.style.transform=`translateX(${-convertToVW(x)*.5}vw) translateY(${-convertToVW(y)*.5}vh)`;
        skillset__content.current.style.transform=`translateX(${convertToVW(x)*.5}vw) translateY(${convertToVW(y)*.5}vh)`;
        
    }

    function convertToVW(x){
        return ((1/100)*(x*100));
    }

    function updateXY(event){
        console.log('update');
        x=event.pageX/getWidth();
        y=event.pageY/getHeight();
    }

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        )
    }

    function getHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        )
    }
    const projectsBtnHandler = (event)=>{
        skillset__container.current.style.opacity=0;
        // skillset__content.current.classList.add(classes["loadProjects__content"]);
        setTimeout(props.loadProjects,1000);
    }
    const skillClickHandler = (event)=>{
        const text=event.target.innerText.split(' ').join('-');
        
        let skillset;
        if(event.target.innerText=='FRONTEND DEVELOPMENT') skillset='HTML || CSS || VANILLAJS || REACTJS || SASS || BOOTSTRAP || WEBPACK || BABEL ';
        else if(event.target.innerText=='BACKEND DEVELOPMENT') skillset='NODEJS || EXPRESSJS || MONGODB || POSTMAN';
        else if(event.target.innerText=='COMPETITIVE PROGRAMMING') skillset='C || C++ || PYTHON';
        else if(event.target.innerText=='DESIGNING') skillset='CANVA';
        else if(event.target.innerText=='LEADERSHIP') skillset='HEADED 10+ COLLEGE PROJECTS';
        else if(event.target.innerText=='COMMUNICATION') skillset='LET\'S HAVE AN INTERVIEW :)';


        setCmdLines((oldState)=>{
            return [...oldState,"C:\\USERS\\ONE>"+"npm run show-"+text.toLowerCase(),skillset];
        });

    }
    return <section className={classes["skillset"]}  onMouseMove={updateXY} ref={skillset__container}> 
        <div className={classes["animation__cover"]} ref={skillset__cover}>
        <div className={classes["content__cover"]}  ref={skillset__content} >
        <div className={classes["cmd__cover"]}>
            <div className={classes["cmd"]}>
                {
                    cmdLines.map((cur,idx)=>{
                        cur=cur.toUpperCase();
                        return (
                            <p className={classes["cmd__line"]} key={idx}>
                                {cur.split('<BR/>').map((ele,idx)=><span key={idx}>{ele}<br/></span>)}
                            </p>
                        );
                    })
                } 
                <p className={classes["cmd__line"]} key={-1}>
                    {"C:\\USERS\\ONE>"}<span className={classes["cmd__script"]}></span><span className={classes["text__script"]}>{textContent}</span>
                </p>
            </div>
        </div>
        <div className={classes["controls"]}>
            <div className={classes["skills"]}>
                <div className={classes["skill__row"]} key={0}>
                    <div className={classes["skill__container"]} onClick={skillClickHandler}>
                        FrontEnd Development
                    </div>
                    
                    
                </div>
                <div className={classes["skill__row"]} key={1}>
                    <div className={classes["skill__container"]} onClick={skillClickHandler}>
                        Backend Development
                    </div>   
                </div>
                <div className={classes["skill__row"]} key={2}>
                    <div className={classes["skill__container"]} onClick={skillClickHandler}>
                        Competitive Programming
                    </div>
                </div>
                <div className={classes["skill__row"]} key={3}>
                <div className={classes["skill__container"]} onClick={skillClickHandler}>
                        designing  
                    </div> 
                </div>
                <div className={classes["skill__row"]} key={4}>
                <div className={classes["skill__container"]} onClick={skillClickHandler}>
                        Leadership
                    </div>  
                </div>
                <div className={classes["skill__row"]} key={5}>
                    <div className={classes["skill__container"]} onClick={skillClickHandler}>
                        Communication
                    </div> 
                </div>
            </div>
            <div className={classes["projects__btn-container"]}>
                <button className={classes["projects__btn"]} onClick={projectsBtnHandler}>
                    Projects
                </button>
            </div>
        </div>
        </div>
        </div>
    </section>;
}
export default Skillset;