import React from "react";

class Register extends React.Component{
		constructor(props){
		super(props)
		this.state ={
			email:"",
			password:"",
			name : ""
		
		}
	}
		onName = (event)=>{
		this.setState({name:event.target.value})
	}
	onEmail = (event)=>{
		this.setState({email:event.target.value})
	}
	onPassword = (event)=>{
		this.setState({password:event.target.value})
	}
		onSubmitRegister = () => {
		fetch("https://obscure-shore-91206.herokuapp.com/register",{
			method:"post",
			headers:{'Content-Type':'application/json'},
			body :JSON.stringify({
				email:this.state.email,
				password: this.state.password,
				name : this.state.name
			})
			})
					.then(response =>response.json())
					.then(user =>{
					if (user.id){
						this.props.loadUser(user)
					this.props.onRouteChange("home");
					
					}
				})
		
	};

	render(){

	return (
		<article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
						<div>

					<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Register</legend>
			       <div className="mt3">
			        <label className="db fw6 lh-copy f6" type="text">Name</label>
			        <input onChange = {this.onName} 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" type="email-address">Email</label>
			        <input onChange = {this.onEmail} 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" type="password">Password</label>
			        <input onChange = {this.onPassword}
			         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			        
			      </div>
			   
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="button" 
			      value="Get Started "
			      onClick ={this.onSubmitRegister}/>
			    </div>
			    
			  </form>
			</main>
							</div>
							</article>
		)
}
}
export default Register;