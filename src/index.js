import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/index";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();