import React, { Component } from "react";
import styles from "./header.module.css"
export default class Header extends Component {
render(){
    return(
        <div>
            
           <header className={styles.header}>
           <a href="http://localhost:3030"><img className={styles.img} src="/favicon.ico" alt="Logo" /></a> 
            <h1>Bienvenidos al Dashboard de Futbol XI</h1>
            </header>
           
        </div>
        
    )
}
}