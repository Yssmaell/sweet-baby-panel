import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main';
import ProductTable from './components/ProductTable';
import UserTable from './components/UserTable';
import ProductDetalle from './components/ProductDetalle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const App = (props) => {

  function ProductDetail() {
    let { id } = useParams();
    return <ProductDetalle id={id}/>;
  }

  return (
    <div id="wrapper">
      <Router>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
        
          <Switch>
            <Route path="/products/:id">
              <ProductDetail />
            </Route>
            <Route path="/products">
              <ProductTable />
            </Route>
            <Route path="/users">
              <UserTable />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>      
      </Router>
    </div>
  );
}

export default App;
