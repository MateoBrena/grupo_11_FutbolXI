import React, { Component } from "react";
 
export default class ProductList extends Component {
   state = {
      productList: [], // list is empty in the beginning
      error: false
   };
 
   componentDidMount() {
       this.getProductList(); // function call
   }
 
   getProductList = async () => {
       try { //try to get data
           let peticion = await fetch("http://localhost:3030/api/products");
          
           if (peticion.ok) { // ckeck if status code is 200
               let respuesta = await peticion.json();
               this.setState({ productList: respuesta.productos});
           } else { this.setState({ error: true }) }
       } catch (e) { //code will jump here if there is a network problem
   this.setState({ error: true });
  }
};
 
  render() {
  const { productList, error } = this.state
      return (
          <div>
            {productList.map(producto => (
              <div key={producto}>
                  <img src={producto.imagen} alt="producto"/>
 
                  <div>
                      <div>{producto.name}</div>
                      <div>{producto.description}</div>
                      <div>{producto.detail}</div>
                  </div>
              </div>
            ))}
            {error && <div>Sorry, can not display the data</div>}
          </div>
      )
            }}