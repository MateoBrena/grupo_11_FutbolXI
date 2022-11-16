import React, { Component } from "react";
import styles from "./header.module.css"
export default class Header extends Component {
render(){
    return(
        <div>
            
           <header className={styles.header}>
            <img className={styles.img} src="/favicon.ico" alt="" />
            <h1>Bienvenidos al Dashboard de Futbol XI</h1>
            </header>
           
        </div>
        
    )
}
}