import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// concurrent mode enabled
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
serviceWorker.unregister();
