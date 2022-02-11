import classes from './Achivements.module.css';
import mypic from './../../../assets/images/mypic.jpg';
import icon from './../../../assets/images/icon.jpg';
import mindspark from './../../../assets/images/codejunkie.jpg';
import codejam from './../../../assets/images/codejam.jpg';
import ranking from './../../../assets/images/ranking.jpg';
import { useRef, useState,useEffect } from 'react';

const Achivements =(props)=>{
    useEffect(()=>{
        let interval = checkForMovements();
        return ()=>{
            clearInterval(interval);
        }
    },[]);

    let achivements__content=useRef();

    let [transform,setTransform]= useState(0);
    const moveRight = (event)=>{
        if(transform==300) setTransform(0);
        else setTransform(transform+100);
    }
    const moveLeft = (event)=>{
        if(transform==0) setTransform(300);
        else setTransform(transform-100);
    }
    const redirectTo = (event)=>{
        switch(event.target.dataset.site){
            case "github":
                window.location.href="https://github.com/theCodeTeen";
                break;
            case "linkedin":
                window.location.href="https://www.linkedin.com/in/dharmik-bhanushali/";
                break;
            case "instagram":
                window.location.href="https://www.instagram.com/brosoambrosia83/";
                break;
        }
    }
    let x=0,y=0;
    function checkForMovements(){
        console.log("setting interval");
        return setInterval(movements,66);
    }

    function movements(event){
    
        // skillset__cover.current.style.transform=`translateX(${-convertToVW(x)*.5}vw) translateY(${-convertToVW(y)*.5}vh)`;
        achivements__content.current.style.transform=`translateX(${convertToVW(x)*.5}vw) translateY(${convertToVW(y)*.5}vh)`;
        
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
    return (
        <section className={classes["ac_container"]} onMouseMove={updateXY} >
            <div className={classes["ac__content"]} ref={achivements__content}>
                <div className={classes["contact__container"]}>
                    <div className={classes["contact__content"]}>
                        <h2 className={classes["contact__head"]}>
                            Get in touch!
                        </h2>
                        <div className={classes["contact__img-container"]}>
                            <img src={mypic} className={classes["contact__img"]}/>
                        </div>
                        <div className={classes["contact__details"]}>
                            <div className={classes["contact__detail"]}>
                                +91 8779627492
                            </div>
                            <div className={classes["contact__detail"]}>
                                whatsapp83trending@gmail.com
                            </div>
                            <div className={classes["contact__detail"]}>
                                Mumbai | Pune | Kutch
                            </div>
                        </div>
                        <div className={classes["contact__social"]}>
                            <div className={classes["social__icon"]}>
                                <i className="bi bi-github"  data-site="github" onClick={redirectTo}></i>
                            </div>
                            <div className={classes["social__icon"]}>
                                <i className="bi bi-linkedin" data-site="linkedin" onClick={redirectTo}></i>
                            </div>
                            <div className={classes["social__icon"]}>
                                <i className="bi bi-instagram"  data-site="instagram" onClick={redirectTo}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes["achivements__container"]}>
                    <div className={classes["achivements__content"]}>
                        <div className={classes["achivements__imgs"]}>
                            <div className={classes["left__swipe"]} onClick={moveLeft}><i className="bi bi-chevron-left"></i></div>
                            <div className={classes["imgs"]}>
                                <div className={classes["img__group"]} style={{transform:'translateX(-'+transform+'%'+')'}}>
                                    <img src={ranking} className={classes["img"]}/>
                                    <img src={mindspark} className={classes["img"]}/>
                                    <img src={codejam} className={classes["img"]}/>
                                    <img src={icon} className={classes["img"]}/>
                                </div>
                            </div>
                            <div className={classes["right__swipe"]} onClick={moveRight}><i className="bi bi-chevron-right"></i></div>
                        </div>
                        <div className={classes["website__end"]}>
                            <h2 className={classes["site__thanks"]}>
                                    Thank you for visting!
                            </h2>
                            <p className={classes["site__desc"]}>
                                    This website is being built with ReactJS,CSS3 and HTML5 and is fully responsive!
                            </p>
                            <span className={classes["site__copyright"]}>
                                Copyright &copy; 2022 Dharmik bhanushali
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achivements;
