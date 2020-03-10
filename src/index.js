import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import RouterLinks from './routes';

ReactDOM.render(
    <BrowserRouter>
        <RouterLinks />
    </BrowserRouter>
, document.getElementById('root'));
