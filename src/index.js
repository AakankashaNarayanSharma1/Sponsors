import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './napp';
import sponsors from './sponsors';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={sponsors} />, document.getElementById('root'));
registerServiceWorker();
