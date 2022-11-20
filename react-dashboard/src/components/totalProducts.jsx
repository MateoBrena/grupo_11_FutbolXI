import React, { Component } from "react";
import {Link} from "react-router-dom";
import styles from "./TotalProducts.module.css"
export default class ProductList extends Component {

    constructor(props){
        super(props)
        this.state = {
         productList: [],
         page: 0,
         count: 0
        }
    }
   async componentWillMount() {
    try {
        let request = await fetch("http://localhost:3030/api/products")
        let data = await request.json()
        this.setState({...this.state,productList: data.productos.splice(0,4), count:data.count})
    } catch(error) {
        return new Error(error)
    }
   }
 
   async componentWillUpdate() {
    try {
        let request = await fetch("http://localhost:3030/api/products")
        let data = await request.json()
        let offset = this.state.page*4
        this.setState({...this.state,productList: data.productos.splice(offset,4), count:data.count})
    } catch(error) {
        return new Error(error)
    }
   }

   increment(){
    this.setState({...this.state,page:this.state.page < 5 ? this.state.page + 1 : 5 })
   }

   decrement(){
    this.setState({...this.state,page:this.state.page > 0 ? this.state.page - 1 : 0 })
   }
 
  render() {
      return (
          < div className={styles.main}>
           <main>
          
            <h2 className={styles.main}>Listado de productos</h2>
            <h3>Total de productos: {this.state.count}</h3> 

            <ul className={styles.ul} >
                {this.state.productList.map(producto =>
                 <li key={producto.id}className={styles.li} >
                     <Link className={styles.links} to={`/products/${producto.id}`}>{producto.name}
                     </Link>
                </li>)}
            </ul>
            <button className={styles.buttonP} onClick={() => this.decrement()}>Anterior</button>
            <button className={styles.buttonN} onClick={() => this.increment()}>Siguiente</button>
            <p><Link className={styles.p} to="/" exact={true}>Home</Link></p>
          </main>
          </div>
         
      )
    }
}