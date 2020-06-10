import React ,{Component} from 'react';
import Nev from "./Componets/Nev/Nev";
import Logo from "./Componets/logo/logo.js"
import Rank from "./Componets/Rank/rank.js"
import SignIn  from "./Componets/sigin/signin.js"
import Register  from "./Componets/Regestier/Register.js"
import Face from "./Componets/face/face";
import Imagelinkform from "./Componets/Imagelink/Imagelinkform";
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
				particles: {
            		number:{
            			value : 300,
            				},
            		density:{
            			enable:true,
            			value_area:800
            				}
            				 	
 				}	
 	}

const inisitalStage =
{
		input :"",
		imageurl:"",
		box: {},
		route :"signin",
		isSignedIn:false,
		user : {
			id :"Deep",
			name : "",
			email:"",
			entries:0,	
			joined : ""
		}
	}

class App extends Component {
constructor(){
	super()
	this.state =inisitalStage 
}

	loadUser = (data) =>{
		this.setState({ user: {
			id :data.id,
			name : data.name,
			email:data.email,
			entries:data.entries,	
			joined : data.joined
	}
})
}
onInputChange = (event) => {
this.setState({input:event.target.value} );
// console.log("input is here ")

 	}
 	facelocation =(data) =>{
		const clarifaiface =data.outputs[0].data.regions[0].region_info.bounding_box
 	const image = document.getElementById("inputImage");
 	const width = Number(image.width);
 	const height = Number(image.height);
 	console.log(width,height)
 	return{
 		leftCol: clarifaiface.left_col * width,
 		topRow : clarifaiface.top_row * height,
 		rightCol:width- (clarifaiface.right_col * width),
 		bottomRow: height - (clarifaiface.bottom_row * height )
 	}
 	}
 	displayBox = (box)=>{
 	console.log(box);
 		this.setState({box:box})
 	}
 onSubmit = () =>{
 	
 		this.setState({imageurl: this.state.input})
			fetch("https://obscure-shore-91206.herokuapp.com/imageUrl",{
			method:"post",
			headers:{'Content-Type':'application/json'},
			body :JSON.stringify({
				input:this.state.input
			})
			})
			.then(response => response.json())
			.then(response => {
	 			if (response){
	 		fetch("https://obscure-shore-91206.herokuapp.com/image",{
			method:"put",
			headers:{'Content-Type':'application/json'},
			body :JSON.stringify({
				id:this.state.user.id
			})
			})
			.then(response => response.json())
			.then(count =>{
				this.setState(Object.assign(this.state.user,{entries:count}))
			})
			.catch(err => {
				alert(err)
			})
	 			}
	 			// console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
				this.displayBox(this.facelocation(response))
					  })
			.catch(err => alert(err))
  
 	}
 onRoute = (route) => {
 	console.log(route)
 	if(route==='signout'){
 		this.setState(inisitalStage)
 	}else{
			this.setState({route:route})}
		}
  render(){
  	const  { imageurl , box ,route } = this.state;
  return (
<div className="App">
   <Particles className="particles" param={particlesOptions}/>
   
      {		
       route === "home"  ?  <div>	
       			 <Nev  onRouteChange = {this.onRoute} />
       		<Logo/>
    		<Rank
    		name={this.state.user.name}
    		entries={this.state.user.entries}/>

	<Imagelinkform 
			onInputChange={this.onInputChange}
			 onSubmit = {this.onSubmit}/>
			 <Face box={box} imageUrl = {imageurl}/>
		</div>
			 : (route ==="signin" 
			 	? <SignIn  loadUser = {this.loadUser} 	onRouteChange = {this.onRoute}/>
			 	: <Register loadUser = {this.loadUser}  onRouteChange ={this.onRoute}/>
			 	)
			 }

</div>
  );
}
}

export default App;
