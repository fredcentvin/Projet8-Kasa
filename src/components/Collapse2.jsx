import { useState } from "react"
import '../style/collapse.css'
import arrow_down from '../assets/images/arrow_down.png'
import arrow_up from '../assets/images/arrow_up.png'

export default function Collapse ({title,content}) {
    const [open,setOpen]= useState(false);
    return (
        <div className="containerCollapse">
            <div className ="collapseTitle" onClick={() => setOpen(!open)}>{title}  <img src={open ? arrow_down:arrow_up} alt="Arrow" /></div>
            {open && <div className="collapseContent">{content} </div>}
        </div>
    )
}
