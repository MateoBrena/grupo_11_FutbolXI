import React, { Component } from "react";
import './Dashboard.css';
import UserList from './components/UserList.jsx';
import ProductList from "./components/TotalProducts.jsx";
import Home from "./components/Home.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import SingleUser from "./components/SingleUser.jsx";
import LastProduct from "./components/LastProduct.jsx";
import LastUser from "./components/LastUser.jsx";
import EachCategory from "./components/EachCategory.jsx";
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render () {
    return (
      <div className="App">
       <Switch>
        <Route path="/productList" exact component={ProductList}/>
        <Route path="/products/:id" exact component={SingleProduct}/>
        <Route path="/userList" exact component={UserList}/>
        <Route path="/user/:id" exact component={SingleUser}/>
        <Route path="/lastProduct" exact component={LastProduct}/>
        <Route path="/eachCategory" exact component={EachCategory}/>
        <Route path="/lastuser" exact component={LastUser}/>
        <Route path="/" exact component={Home}/> 
      </Switch>
      {/* <Link to="/productList" exact={true}>Lista de productos</Link> */}
      </div>
    );
  }
    
}

export default App;
