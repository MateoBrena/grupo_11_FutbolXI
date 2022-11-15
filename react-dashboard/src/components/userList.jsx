import React, { Component } from "react";
import {Link} from "react-router-dom"
 
export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
         userList: [],
         count: 0
        }
    }
   async componentWillMount() {
    try {
        let request = await fetch("http://localhost:3030/api/users")
        let data = await request.json()
        this.setState({...this.state,userList: data.usuarios, count:data.count})
    } catch(error) {
        return new Error(error)
    }
   }
 
   async componentWillUpdate() {
    try {
        let request = await fetch("http://localhost:3030/api/users")
        let data = await request.json()
        this.setState({...this.state,userList: data.usuarios, count:data.count})
    } catch(error) {
        return new Error(error)
    }
   }

 
  render() {
      return (
          <main>
            <h2>Listado de usuarios</h2>
            <h3>Total de usuarios: {this.state.count}</h3> 
            <ul>{this.state.userList.map(user => <li key={user.id}><Link to={`/user/${user.id} `}>{user.nombre}</Link></li>)}</ul>
            <p><Link to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}