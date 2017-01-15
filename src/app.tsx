import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

import './app.css';

import RootRouter from './Routing/rootRouter';


ReactDOM.render(<RootRouter/>, document.getElementById('app'))