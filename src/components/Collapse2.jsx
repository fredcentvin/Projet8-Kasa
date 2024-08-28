import { useState,useEffect } from "react"
import '../style/collapse.css'
import arrow_down from '../assets/images/arrow_down.png'


export default function Collapse ({title,content}) {
    const [open,setOpen]= useState(false);
    const [animationClass, setAnimationClass] = useState('closed');
    const rotation= open? 0: 180; 
    useEffect(() => {
        if (open) {
            setAnimationClass('open');
        } else {
            setAnimationClass('closed');
        }
    }, [open]);
    
    return (
        <div className="containerCollapses">
            <div className ="collapseTitle" onClick={() => setOpen(!open)}>{title}  <img src={arrow_down} alt="Arrow" style={{transform:`rotate(${rotation}deg)`}} /></div>
            {open && (<div className={`collapseContent ${animationClass}`}> {content}</div>)}
        </div>
    )
}

