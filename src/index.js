import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const object = {
	roomname : "jsfiddletest",
	/*provide a valid url for signalmaster otherwise this won't work*/
	signalmasterUrl: "http://localhost:8888"
}

ReactDOM.render(<App obj = {object} />, document.getElementById('root'));
registerServiceWorker();
