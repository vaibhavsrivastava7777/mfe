import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const mount = (el) => {

    ReactDom.render(<App />, el)
}

const devRoot = document.querySelector('#root');

mount(devRoot)

