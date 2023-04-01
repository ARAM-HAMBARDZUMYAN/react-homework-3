import React from "react";

import "./style.scss"

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          formData: {
            firstName:'',
            lastName:"",
            age:"",
            email: '',
            password: '',
            confirmPassword:"",
            gender:"male",
          },
            usersList:[]
        }
    }
    // Form Events
  handleChange =(e)=>{
    const {formData} = this.state
    formData[e.target.name] = e.target.value //
    this.setState(formData)
    } 
    createUser = () => {

        let ob = {
           firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                age:this.state.age,
                password:this.state.password,
                 confirmPassword:this.state.confirmPassword,
                gender:this.state.gender
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
          this.setState({
            usersList: [...this.state.usersList, this.state.formData],
            formData: {
              firstName: '',
              lastName: '',
              age: '',
              email: '',
              password: '',
              confirmPassword: '',
              gender: 'male'
            }
          })
      
       
        }
    render() {
      console.log(this.state.usersList)
                    return (<div className="container">
            <div className="title">Registration</div>
            <div className="content">
              <form >
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" name={'firstName'} placeholder="Enter your name" required onChange={this.handleChange} 
                       value={this.state.formData.firstName}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Username</span>
                    <input type="text"  name={'lastName'} placeholder="Enter your username" required onChange={this.handleChange}
                       value={this.state.formData.lastName}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text"  name={'email'}  placeholder="Enter your email" required onChange={this.handleChange}
  value={this.state.formData.email}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Age</span>
                    <input type="text"   name={'age'} placeholder="Enter your number" required onChange={this.handleChange}
                        value={this.state.formData.age}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="text" name={'password'}  placeholder="Enter your password" required onChange={this.handleChange}
                value={this.state.formData.password}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input type="text" name={'confirmPassword'} placeholder="Confirm your password" required onChange={this.handleChange}
                        value={this.state.formData.confirmPassword}
                    />
                  </div>
                <div className="input-box">
                <label>
                <span className="details">Gender </span>
                    <select onChange={this.handleChange} defaultValue="Select Gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                 </div>
                
                </div>
                </form> 
                <div className="button">
               <button onClick={this.createUser}>Registration</button>
                </div>
            </div>       
            <div>
          {this.state.usersList.map((item, index) => {
              return <div>
                <p>firstName: {item.firstName}</p>
                <p>lastName: {item.lastName}</p>
                <p>age: {item.age}</p>
                <p>email: {item.email}</p>
                <p>gender: {item.gender}</p>
              </div>
            })
           }
        </div>
     
          </div>
    
            )
    }
}
export default Form