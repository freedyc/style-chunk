import React from 'react';
import ReactDOM from 'react-dom';
import Mask from './mask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mask />, div);
  ReactDOM.unmountComponentAtNode(div);
});
