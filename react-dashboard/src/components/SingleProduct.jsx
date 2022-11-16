import React, { Component } from "react";
import {Link} from "react-router-dom";
import styles from "./SingleProduct.module.css"
export default class SingleProduct extends Component {

    constructor(props){
        super(props)
        this.state = {
         id: Number(props.match.params.id),
         producto: {}
        }
    }
   
    async componentWillMount() {
        try {
            let request = await fetch("http://localhost:3030/api/products/detail/"+this.state.id)
            let data = await request.json()
            console.log(data)
            this.setState({...this.state,producto:data})
        } catch(error) {
            return new Error(error)
        }
       }
     
        async componentWillUpdate() {
        try {
            let request = await fetch("http://localhost:3030/api/products/detail/"+this.state.id)
            let data = await request.json()
            this.setState({...this.state,producto:data})
        } catch(error) {
            return new Error(error)
        }
       } 

  render() {
      return (
          <main>
            <h2 className={styles.h2}>{this.state.producto.marca} {this.state.producto.nombre}</h2>
            
            <article className={styles.product}>
            <h3>${this.state.producto.precio}</h3>
            <h4>Tipo de terreno: {this.state.producto.categoria}</h4>
            <p>{this.state.producto.descripcion}</p>
            <img className={styles.img} src={`http://localhost:3030/${this.state.producto.imagen}`} alt="" />
            
            </article>
            <p><Link to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}