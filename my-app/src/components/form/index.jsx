import React from 'react';


class UsersList extends React.Component {

  
  render() { 
    
  return (
    <div className='P-flex-container'>
        {this.state.userData.map((item, index) => {
            return <div className='P-flex-box'  >
            
      <p>firstName:{item.firstName}</p>
      <p>LastName:{item.lastName}</p>
      <p>Age:{item.age}</p>
      <p>Email:{item.email}</p>
      <p>Gender:{item.gender}</p>
    </div>
          })}
    </div>
  );
}}
export default UsersList 