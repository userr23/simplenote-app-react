import React from 'react';

export default function AppHeader ( { print, omit } ) {
    return (
        <div className="app-header d-flex">
            <h1>Notes</h1>
            <h2>{print} available to print, {omit} omitted</h2>
        </div>
    );
}
