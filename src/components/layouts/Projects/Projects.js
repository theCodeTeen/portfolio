import {useEffect, useRef } from 'react';
import classes from './Projects.module.css';
const Projects = (props)=>{
        const projects=useRef();
        const highlight__container=useRef();
        const project__list=useRef();
        useEffect(()=>{
            projects.current.style.opacity=1;
        },[]);
        useEffect(()=>{
            let interval = checkForMovements();
            return ()=>{
                clearInterval(interval);
            }
        },[]);
        function redirectTo(event){
            let target=event.target.textContent;
            if(target.startsWith("Comparify")) target="Comparify";
            else if(target.startsWith("Rubics")) target="Rubics";
            else if(target.startsWith("GetHelp")) target="GetHelp";

            console.log(target);
            switch(target){
                case "Comparify":
                    window.location.href="https://github.com/theCodeTeen/comparify";
                    break;
                case "Rubics":
                    window.location.href="https://github.com/theCodeTeen/Rubics";
                    break;
                case "GetHelp":
                    window.location.href="https://github.com/theCodeTeen/gethelp";
                    break;
                case "Tiktactoe (Java, AWT)":
                    window.location.href="https://github.com/theCodeTeen/tiktactoe";
                    break;
                case "Dictonary (Python,Tkinker,JSON)":
                    break;
                case "Makeup artist portfolio (Frontend)":
                    break;
                case "CP Collection (C,C++,Python)":
                    window.location.href="https://github.com/theCodeTeen/CP_Collection";
                    break;
                case "Forkify (Web,Frontend,backend)":
                    window.location.href="https://github.com/theCodeTeen/forkify";
                    break;
                case "View github":
                    window.location.href="https://github.com/theCodeTeen";
                    break;
            }
        }
        function loadAchivements(){
            projects.current.style.opacity=0;
            setTimeout(props.loadAchivements,1000);
        }
        let x=0,y=0;
        function checkForMovements(){
            console.log("setting interval");
            return setInterval(movements,66);
        }
    
        function movements(event){
            highlight__container.current.style.transform=`translateX(${convertToVW(x)*.5}vw) translateY(${convertToVW(y)*.5}vh)`;
        
            // skillset__cover.current.style.transform=`translateX(${-convertToVW(x)*.5}vw) translateY(${-convertToVW(y)*.5}vh)`;
            project__list.current.style.transform=`translateX(${convertToVW(x)*.5}vw) translateY(${convertToVW(y)*.5}vh)`;
            
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
        return(<div className={classes["project__container"]} onMouseMove={updateXY} ref={projects}>
            <div className={classes["project__content"]} >
                <div className={classes["highlight__container"]} ref={highlight__container}>
                    <div className={classes["highlight"]} onClick={redirectTo}>
                        <h2 className={classes["highlight__head"]}>Rubics</h2>
                        <div className={classes["highlight__tags"]}>
                            <span className={classes["highlight__tag"]}>C++</span>
                            <span className={classes["highlight__tag"]}>GUI</span>
                        </div>
                    </div>
                    <div className={classes["highlight"]} onClick={redirectTo}>
                        <h2 className={classes["highlight__head"]}>GetHelp</h2>
                        <div className={classes["highlight__tags"]}>
                            <span className={classes["highlight__tag"]}>Web</span>
                            <span className={classes["highlight__tag"]}>Frontend</span>
                            <span className={classes["highlight__tag"]}>Backend</span>
                        </div>
                    </div>
                    <div className={classes["highlight"]} onClick={redirectTo}>
                        <h2 className={classes["highlight__head"]}>Comparify</h2>  
                        <div className={classes["highlight__tags"]}>
                            <span className={classes["highlight__tag"]}>Web</span>
                            <span className={classes["highlight__tag"]}>Frontend</span>
                            <span className={classes["highlight__tag"]}>Backend</span>
                        </div>
                    </div>
                </div>
                <div className={classes["project__list"]} ref={project__list}>
                    <h2 className={classes["project__head"]}>
                        Other projects
                    </h2>
                    <div className={classes["project__item"]} onClick={redirectTo}>
                        Tiktactoe (Java, AWT)
                    </div>
                    <div className={classes["project__item"]} onClick={redirectTo}>
                        Dictonary (Python,Tkinker,JSON)
                    </div>
                    <div className={classes["project__item"]} onClick={redirectTo}>
                        Makeup artist portfolio (Frontend)
                    </div>
                    <div className={classes["project__item"]} onClick={redirectTo}>
                        CP Collection (C,C++,Python)
                    </div>
                    <div className={classes["project__item"]} onClick={redirectTo}>
                        Forkify (Web,Frontend,backend)
                    </div>
                    <div className={classes["project__btns"]}>
                        <button className={classes["github__repo"]} onClick={redirectTo}>View github</button>
                        <button className={classes["achivements__btn"]} onClick={loadAchivements}>Achivements</button>
                    </div>
                </div>
            </div>
        </div>);
}
export default Projects;