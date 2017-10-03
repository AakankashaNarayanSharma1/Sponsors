import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './newapp';
import sponsors from './sponsors';
import spons_type from './spons_types';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={sponsors} name={spons_type}/>, document.getElementById('root'));
registerServiceWorker();
