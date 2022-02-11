import classes from './Intro.module.css';
import earth from './../../../assets/images/earth.png';
import { useRef } from 'react';
import {CSSTransition} from 'react-transition-group';

const Intro = (props)=>{

    //Declarations
    const intro=useRef();
    const intro__content=useRef();
    const intro__earthImg=useRef();
    const intro__text=useRef();
    let x=0.5,y=0.5,interval;


    //Event Handlers

    function checkForMovements(event){
        interval=setInterval(movements,66);
    }

    function movements(event){

    
        intro__content.current.style.transform=`translateX(${-convertToVW(x)*2}vw) translateY(${-convertToVW(y)*2}vh)`;
        intro__earthImg.current.style.transform=`scale(${(convertToVW(x)*20)+100}%) rotateZ(${convertToVW(x)*10}deg) translateX(${-convertToVW(x)}vw) translateY(${-convertToVW(y)}vh)`;
        intro__text.current.style.transform=`translateX(${-convertToVW(x)}vw) translateY(${-convertToVW(y)}vh)`;
    }

    function convertToVW(x){
        return ((.5/100)*(x*100));
    }

    function updateXY(event){
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

    function loadSkillset(event){
        clearInterval(interval);
        intro.current.style.opacity=0;
        setTimeout(props.loadSkillset,2000);
    }

    return (
        <section className={classes["intro"]} ref={intro} onLoad={checkForMovements} onMouseMove={updateXY}>
            <div className={classes["intro__content"]} ref={intro__content} >
                <div className={classes["intro__text"]} ref={intro__text}>
                    <h3>Hello, I am</h3>
                    <h2>Dharmik Bhanushali</h2>
                    <h5>A web tech <span className={classes["color__crimson"]}>enthusiast</span> and a life long <span className={classes["color__crimson"]}>learner</span></h5>

                    <div className={classes["intro__btn"]} onClick={loadSkillset}>Skillset</div>
                </div>
                <div className={classes["intro__earth"]} ref={intro__earthImg}>
                    <img src={earth}/>
                </div>
            </div>
        </section>
    );

}

export default Intro;