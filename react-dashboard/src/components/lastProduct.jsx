import React, { Component } from "react";
import {Link} from "react-router-dom";
import styles from "./LastProduct.module.css"

export default class LastProduct extends Component {

    constructor(props){
        super(props)
        this.state = {
         allProducts: []
        }
    }
   async componentWillMount() {
    try {
        let request = await fetch("http://localhost:3030/api/products")
        let data = await request.json()
        this.setState({...this.state,allProducts: data.productos.pop()})
    } catch(error) {
        return new Error(error)
    }
   }
 
  render() {
      return (
          <main className={styles.main}>
            <h2 className={styles.h2}>Último producto creado:</h2>
            <article className={styles.ul}>
            <div className={styles.list}> {this.state.allProducts.name}</div>
            <div className={styles.list}>{this.state.allProducts.description}</div>
            
            </article>
          
            <p className={styles.p}>< Link className={styles.p}to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}