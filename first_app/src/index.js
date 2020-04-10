import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Style from "./css/style.css"

ReactDOM.render(<App /> , document.getElementById('root'));

serviceWorker.register();
