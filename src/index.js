import React       from 'react';
import ReactDOM    from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEdit,
    faExclamation,
    faTrashAlt,
    faPrint,
    faTimes,
    faCheck,
    faBan
}                  from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add( faEdit, faExclamation, faTrashAlt, faPrint, faTimes, faCheck, faBan, faReact );

import App from './components/App';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
