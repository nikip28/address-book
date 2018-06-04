import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import ContactNew from "./ContactNew";
import ContactEdit from './ContactEdit';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route path="/contact/new" component={ContactNew} />
            <Route path="/contact/edit" component={ContactEdit} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
