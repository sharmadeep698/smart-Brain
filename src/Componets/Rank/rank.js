import React from "react";

const Rank = ({name, entries}) =>{
	return (
			<div>
			<div className ="f4 white ">
			{`${name}, your image count is ..`}
			</div>
			<div className="f1 white">
			{entries} 
			</div>
				</div>
		)
}
export default Rank;