import React from "react";
import "./imagelink.css"
const Imagelinkform = ({onInputChange , onSubmit }) =>{
	return (
		<div>
		<p><strong>{"This Magic Brain will Detect faces,In your picture give it a try  "}</strong></p>
			<div className="center">
			<div className="center form pa4 br2 shadow-5 " >
			<input  className="f4 pa2 w-50 center" type = "text" onChange={onInputChange} />
			<button className="w-20 h-10 grow f4 link pv2 dib white bg-light-purple" onClick={onSubmit}> Detect </button>
			</div>
		</div>
		</div>
		)
}
export default Imagelinkform;