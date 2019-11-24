import React, { useState } from 'react';

export default function SearchPanel ( { onSearchChange } ) {

    const [ term, setTerm ] = useState( '' );

    const onChangeTerm = ( e ) => {
        setTerm( e.target.value );
        onSearchChange( e.target.value );
    };

    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               value={term}
               onChange={onChangeTerm}
        />
    );
}
