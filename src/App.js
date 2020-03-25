import React, { Component } from "react";
import Helloworld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = { tech: "React" };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helloworld tech={store.getState().tech} />
      </div>
    );
  }
}

export default App;
