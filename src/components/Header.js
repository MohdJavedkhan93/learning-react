import React from "react";
const Header1 = (props) =>{
    console.log(props)
    return(
        <div>
            <h1>{props.myName}</h1>
        </div>
    )
}
export default Header1