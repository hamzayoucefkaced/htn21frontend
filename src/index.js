import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceworker";

import "./assets/style.css";
import "./assets/responsive.css";


const loader = document.querySelector('#loader');
const showLoader = () => loader.classList.remove('loader--hide')
const hideLoader = () => loader.classList.add('loader--hide')

setTimeout(() =>
  ReactDOM.render(<App hideLoader={hideLoader} showLoader={showLoader} />, document.getElementById('root')), 1000);

serviceWorker.unregister();
