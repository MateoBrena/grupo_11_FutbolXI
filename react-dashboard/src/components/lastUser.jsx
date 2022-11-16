import React, { Component } from "react";
import {Link} from "react-router-dom";
import styles from "./LastUser.module.css"

export default class LastUser extends Component {

    constructor(props){
        super(props)
        this.state = {
         allUsers: []
        }
    }
   async componentWillMount() {
    try {
        let request = await fetch("http://localhost:3030/api/users")
        let data = await request.json()
        this.setState({...this.state,allUsers: data.usuarios.pop()})
    } catch(error) {
        return new Error(error)
    }
   }
 
  render() {
      return (
          <main>
            <h2 className={styles.h2} >Último usuario creado:</h2>
            <div className={styles.list}>{this.state.allUsers.nombre}</div>
            <div className={styles.list}>{this.state.allUsers.email}</div>
            <p><Link to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}