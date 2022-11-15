import React, { Component } from "react";
import {Link} from "react-router-dom";
 
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
          <main>
            <h2>Marcas:</h2>
            <div>Adidas:{this.state.eachCategory.Adidas}</div>
            <div>Nike:{this.state.eachCategory.Nike}</div>
            <div>Puma:{this.state.eachCategory.Puma}</div>
            <div>Terreno Firme:{this.state.eachCategory.TerrenoFirme}</div>
            <div>Terreno Blando:{this.state.eachCategory.TerrenoBlando}</div>


            <p><Link to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}