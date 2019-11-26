import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AppHeader ( { print, omit } ) {
    return (
        <div className="app-header d-flex">
            <h1>
                SimpleNote
                <sup>
                    <FontAwesomeIcon icon={[ 'fab', 'react' ]} />
                </sup>
            </h1>
            <h2>{print} available to print, {omit} omitted</h2>
        </div>
    );
}
