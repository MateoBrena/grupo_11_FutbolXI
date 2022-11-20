import React, { Component } from "react";
import {Link} from "react-router-dom"
import styles from "./UserList.module.css"
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
          <main className={styles.main}>
            <h2 className={styles.h}>Listado de usuarios</h2>
            <h3 className={styles.h}>Total de usuarios: {this.state.count}</h3> 
            <ul className={styles.ul} >{this.state.userList.map(user => <li key={user.id}className={styles.li} ><Link className={styles.links} to={`/user/${user.id} `}>{user.nombre}</Link></li>)}</ul>
            <p>< Link className={styles.p} to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}