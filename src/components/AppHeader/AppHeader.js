import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AppHeader ( { print, omit, total } ) {
    return (
        <div className="app-header d-flex">
            <h1>
                SimpleNote
                <sup>
                    <FontAwesomeIcon icon={[ 'fab', 'react' ]} />
                </sup>
            </h1>
            {( omit !== 0 ) && <h5>{print} available to print, {omit} omitted</h5>}
            {( omit === 0 ) && <h5>All {total} notes available to print</h5>}
        </div>
    );
}
