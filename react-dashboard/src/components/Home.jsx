import React, { Component } from "react";
import {Link} from "react-router-dom"
 
export default class Home extends Component {
render(){
    return(
        <div>
            <h1>Bienvenidos al Home</h1>
            <Link to="/productList" exact={true}>Lista de productos</Link>
            <br />
            <Link to="/userList" exact={true}>Lista de usuarios</Link>
            <br />
            <Link to="/lastProduct" exact={true}>Último producto creado</Link>
            <br />
            <Link to="/lastUser" exact={true}>Último usuario creado</Link>
            <br />
            <Link to="/eachCategory" exact={true}>Marcas y categorías</Link>
        </div>
        
    )
}
}