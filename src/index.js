import React       from 'react';
import ReactDOM    from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas }     from '@fortawesome/free-solid-svg-icons';
import { far }     from '@fortawesome/free-regular-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';

library.add( fas, far );

import App from './components/App';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
