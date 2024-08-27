import { useState } from "react"
import '../style/collapse.css'
import arrow_down from '../assets/images/arrow_down.png'


export default function Collapse ({title,content}) {
    const [open,setOpen]= useState(false);
    const rotation= open? 0: 180; 
    const translation= open? 0: 20;
    
    return (
        <div className="containerCollapses">
            <div className ="collapseTitle" onClick={() => setOpen(!open)}>{title}  <img src={arrow_down} alt="Arrow" style={{transform:`rotate(${rotation}deg)`}} /></div>
            {open && (<div className="collapseContent" style={{transform:`translateY(${translation}px)`,transition:`transform 0.7s ease`}}>{content}</div>)}
            
        </div>
    )
}

