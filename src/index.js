<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from "./serviceWorker";
import reducer,  { initialState }  from "./components/reducer";
import {StateProvider} from "./components/StateProvider";



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
>>>>>>> a535050414421a246f622f0b55b83708d3245752
