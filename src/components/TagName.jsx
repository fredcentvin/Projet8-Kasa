import React from "react"
import '../Style/tag.css'

function TagName({tagText}) {
    return(
      <div className="tag">
        <p className="tagText">{tagText} </p>
      </div>
    )
  }
  
  export default TagName