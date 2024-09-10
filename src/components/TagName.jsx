import React from "react"
import '../Style/Tag.css'

function TagName({tagText}) {
    return(
      <div className="tag">
        <p className="tagText">{tagText} </p>
      </div>
    )
  }
  
  export default TagName