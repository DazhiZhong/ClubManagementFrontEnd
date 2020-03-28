import React from 'react'
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
function ActionButton(props){
    return(
        <Fab 
            onClick={(e)=>{e.preventDefault(); return props.onClick()}} 
            mainButtonStyles={{width:80, borderRadius:80}} 
            position={{bottom:20, right:20}}
            event={"click"}
            icon={<p style={{fontFamily:"Bungee Inline", fontSize:30 }}>+</p>}
            >
            
        </Fab>
    )
}
export default ActionButton