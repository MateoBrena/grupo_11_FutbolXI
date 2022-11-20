import React, { Component } from "react";
import {Link} from "react-router-dom";
 import styles from "./EachCategory.module.css"
export default class EachCategory extends Component {

    constructor(props){
        super(props)
        this.state = {
         eachCategory: {}
        }
    }
   async componentWillMount() {
    try {
        let request = await fetch("http://localhost:3030/api/products")
        let data = await request.json()
        this.setState({...this.state,eachCategory: data.countByCategory})
    } catch(error) {
        return new Error(error)
    }
   }
 
  render() {
      return (
          <main className={styles.main}>
            <h2 className={styles.h2} >Marcas:</h2>
            <article className={styles.ul}>
            <div className={styles.list}>Adidas: {this.state.eachCategory.Adidas}</div>
            <div className={styles.list} >Nike: {this.state.eachCategory.Nike}</div>
            <div className={styles.list} >Puma: {this.state.eachCategory.Puma}</div>
            <div className={styles.list} >Terreno Firme: {this.state.eachCategory.TerrenoFirme}</div>
            <div className={styles.list} >Terreno Blando: {this.state.eachCategory.TerrenoBlando}</div>
            </article>
          


            <p className={styles.p}>< Link className={styles.p}to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}