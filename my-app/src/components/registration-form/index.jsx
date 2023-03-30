import React from "react";

import "./style.scss"

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            FirstName:'',
            LastName:"",
            Age:"",
            Email: '',
            Password: '',
            ConfirmPassword:"",
            Gender:"",
        }
    }
    // Form Events
    onChangeFirstName=(e)=>{
        this.setState({FirstName:e.target.value })
    }
    onChangeLastName=(e)=>{
        this.setState({LastName: e.target.value })
    }
    onChangeEmail=(e)=> {
        this.setState({Email: e.target.value })
    }
    onChangeAge=(e)=> {
        this.setState({Age: e.target.value })
    }
    onChangePassword=(e)=> {
        this.setState({Password: e.target.value })
    }
    onChangeConfirmPassword=(e)=> {
        this.setState({ConfirmPassword: e.target.value })
    }
    onChangeGender=(e)=>{
        this.setState({ Gender: e.target.value })
    } 
            
    onSubmit=(e) =>{
        let ob = {
           FirstName:this.state.FirstName,
                LastName:this.state.LastName,
                Email:this.state.Email,
                Age:this.state.Age,
                Password:this.state.Password,
               ConfirmPassword:this.state.ConfirmPassword,
                Gender:this.state.Gender
          }
          let olddata = localStorage.getItem('formdata');
      if(olddata==null){
            olddata = []
            olddata.push(ob)    
            localStorage.setItem('formdata', JSON.stringify(olddata));
          }else{
            let oldArr = JSON.parse(olddata)
            oldArr.push(ob)
            localStorage.setItem("formdata", JSON.stringify(oldArr))
          }
        let newusers=JSON.parse(localStorage.getItem('formdata'));
      
       
        }
    render() {
      console.log(this.state)
              return (<div className="container">
            <div className="title">Registration</div>
            <div className="content">
              <form onSubmit={this.onSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" placeholder="Enter your name" required onChange={this.onChangeFirstName} />
                  </div>
                  <div className="input-box">
                    <span className="details">Username</span>
                    <input type="text" placeholder="Enter your username" required onChange={this.onChangeLastName}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder="Enter your email" required onChange={this.onChangeEmail}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Age</span>
                    <input type="text" placeholder="Enter your number" required onChange={this.onChangeAge}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="text" placeholder="Enter your password" required onChange={this.onChangePassword}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input type="text" placeholder="Confirm your password" required onChange={this.onChangeConfirmPassword}/>
                  </div>
                <div className="input-box">
                <label>
                <span className="details">Gender </span>
                    <select onChange={this.onChangeGender} defaultValue="Select Gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                 </div>
                 <div className="button">
                  <input type="submit" value="Register" />
                </div>
                </div>
                </form>
            </div>      
           
          </div>
    
            )
    }
}
export default Form