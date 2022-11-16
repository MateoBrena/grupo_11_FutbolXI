import React, { Component } from "react";
import {Link} from "react-router-dom"
import styles from "./home.module.css"

export default class Home extends Component {
render(){
    return(
        <div>
            
           <main className={styles.main} >
           <Link  className={styles.links} to="/productList" exact={true}>Lista de productos</Link>
            
            <Link className={styles.links} to="/userList" exact={true}>Lista de usuarios</Link>
            
            <Link className={styles.links} to="/lastProduct" exact={true}>Último producto creado</Link>
            
            <Link className={styles.links} to="/lastUser" exact={true}>Último usuario creado</Link>
            
            <Link className={styles.links} to="/eachCategory" exact={true}>Marcas y categorías</Link>
           </main>
           
        </div>
        
    )
}
}