import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

import RootRouter from './rootRouter';


ReactDOM.render(<RootRouter/>, document.getElementById('app'))