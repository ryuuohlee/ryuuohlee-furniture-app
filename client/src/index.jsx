// render the app component to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './components/App.jsx';
import '../dist/style.css';


ReactDOM.render(<ProductDetails />, document.getElementById('app'));
