
import React from "react";
import './Dashboard.css';
import UserList from './components/userList.jsx';
import ProductList from './components/totalProducts.jsx';


function App() {
  return (
    <div className="App">
      
      <UserList/>
      <ProductList/>
      
    </div>
  );
}

export default App;
