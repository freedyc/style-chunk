import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Mask from './mask';
import Button from './button';

ReactDOM.render(<Button theme={{icolor:'red'}}>Button</Button>, document.getElementById('root'));
registerServiceWorker();
