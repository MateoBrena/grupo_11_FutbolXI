import React, { Component } from "react";
 
export default class UserList extends Component {
   state = {
      userList: [], // list is empty in the beginning
      error: false
   };
 
   componentDidMount() {
       this.getUserList(); // function call
   }
 
   getUserList = async () => {
       try { //try to get data
           const peticion = await fetch("http://localhost:3030/api/products");
           if (peticion.ok) { // ckeck if status code is 200
               const respuesta = await peticion.json();
               this.setState({ userList: respuesta.results});
           } else { this.setState({ error: true }) }
       } catch (e) { //code will jump here if there is a network problem
   this.setState({ error: true });
  }
};
 
  render() {
  const { userList, error } = this.state
      return (
          <div>
            {userList.map(usuario => (
              <div key={usuario}>
                  <img src={usuario.imagen} alt="usuario"/>
 
                  <div>
                      <div>{usuario.name}</div>
                      <div>{usuario.detail}</div>
                      <div>{usuario.email}</div>
                  </div>
              </div>
            ))}
            {error && <div>Sorry, can not display the data</div>}
          </div>
      )
            }}