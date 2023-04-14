import React from "react";

function Container({children}) {
    const style = {
        width: '100vw'
    }
    
    return(
        <div style={style}>
            { children }
        </div>
    )
}

export default Container;