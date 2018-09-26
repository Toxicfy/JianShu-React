// 根组件
import React, { Component } from "react";
import { Route, BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./common/header";
import Home from "./page/Home";
import Detail from "./page/Detail";

import 'antd/dist/antd.css'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
