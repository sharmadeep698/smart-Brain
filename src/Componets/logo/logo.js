import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./Brain.png"

const Logo = () =>{
	return (
		<div className="logW">
			<div className = "m4 mt0 " 
			style= {{display:"content" , justifyContent:"flex-end"}} / 	>
				
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} 
			style={{ height: 150, width: 150 }} >
		
		 <div className="Tilt-inner pa3"> <img src={brain} alt="brain"/> </div>
			</Tilt>
			
		</div>
		)
}
export default Logo;