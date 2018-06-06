import React from 'react';
import ReactDOM from 'react-dom';
import Mask from './mask';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mask />, document.getElementById('root'));
registerServiceWorker();
