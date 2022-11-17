import React, { Component } from "react";
import UserList from './components/UserList.jsx';
import ProductList from "./components/TotalProducts.jsx";
import Home from "./components/Home.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import SingleUser from "./components/SingleUser.jsx";
import LastProduct from "./components/LastProduct.jsx";
import LastUser from "./components/LastUser.jsx";
import EachCategory from "./components/EachCategory.jsx";
import {Route, Switch} from "react-router-dom";
import styles from "./app.module.css"
import Header from "./components/header.jsx";
class App extends Component {
  render () {
    return (
      <div className={styles.App}>

       <Header/>     
       <Switch className={styles.main}>
        <Route path="/productList" exact component={ProductList}/>
        <Route path="/products/:id" exact component={SingleProduct}/>
        <Route path="/userList" exact component={UserList}/>
        <Route path="/user/:id" exact component={SingleUser}/>
        <Route path="/lastProduct" exact component={LastProduct}/>
        <Route path="/eachCategory" exact component={EachCategory}/>
        <Route path="/lastuser" exact component={LastUser}/>
        <Route path="/" exact component={Home}/> 
      </Switch>
      <a href="http://localhost:3030/"> Volver al sitio </a>
      </div>
    );
  }
    
}

export default App;
