import React, { Component } from "react";
import {Link} from "react-router-dom";
import styles from "./SingleUser.module.css"
export default class SingleUser extends Component {

    constructor(props){
        super(props)
        this.state = {
         id: Number(props.match.params.id),
         usuario: {}
        }
    }
   
    async componentWillMount() {
        try {
            let request = await fetch("http://localhost:3030/api/users/"+this.state.id)
            let data = await request.json()
            console.log(data)
            this.setState({...this.state,usuario:data})
        } catch(error) {
            return new Error(error)
        }
       }
     
        async componentWillUpdate() {
        try {
            let request = await fetch("http://localhost:3030/api/user/"+this.state.id)
            let data = await request.json()
            this.setState({...this.state,usuario:data})
        } catch(error) {
            return new Error(error)
        }
       } 

  render() {
      return (
        <main className={styles.main}>
        <article className={styles.user}>
            <h2 className={styles.h2}>{this.state.usuario.nombre} {this.state.usuario.apellido}</h2>
            <h3 className={styles.h2}>{this.state.usuario.email}</h3>
            <img className={styles.img} src={`http://localhost:3030/${this.state.usuario.imagen}`} alt="" />
            </article> 
            <p className={styles.links}><Link className={styles.links} to="/UserList" exact={true}>Back</Link></p>
          </main>
      )
    }
}