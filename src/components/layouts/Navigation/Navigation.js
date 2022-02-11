import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';
const Navigation = (props) =>{
    const [hide,setHide]=useState(true);
    const navHandler = (event)=>{
        setHide((hide)=>!hide);
    }
    return (
        <section className={classes["navigation__container"]+" "+(hide?classes["navigation__hide"]:"")} >
            <div className={classes["navigation__content"]}>
                <div className={classes["navigation"]}>
                    <NavLink to="/home" className={({isActive})=>classes["navlink"]+" "+(isActive?classes["navlink__active"]:"")}>
                        Introduction
                    </NavLink>
                    <NavLink to="/skillset" className={({isActive})=>classes["navlink"]+" "+(isActive?classes["navlink__active"]:"")}>
                        Skillset
                    </NavLink>
                    <NavLink to="/projects" className={({isActive})=>classes["navlink"]+" "+(isActive?classes["navlink__active"]:"")}>
                        Projects
                    </NavLink>
                    <NavLink to="/achivements" className={({isActive})=>classes["navlink"]+" "+(isActive?classes["navlink__active"]:"")}>
                         Achivement
                    </NavLink>
                    <span className={classes["navlink"]} onClick={navHandler}>exit</span>
                </div>
            </div>
            <div className={classes["navigation__open"]} onClick={navHandler}>
                <i class="bi bi-arrow-bar-right"></i>
            </div>  
        </section>
    );
}
export default Navigation;