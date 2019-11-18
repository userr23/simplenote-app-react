import React from 'react';

const AppHeader = ( { notes, done } ) => {
    return (
        <div className="app-header d-flex">
            <h1>Notes List</h1>
            <h2>{notes} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;