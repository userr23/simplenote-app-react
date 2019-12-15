import React, { useState } from 'react';
import Input               from '../../../Input';

export default function SearchInput ( { onSearchChange } ) {

    const [ term, setTerm ] = useState( '' );

    const onChangeTerm = ( e ) => {
        setTerm( e.target.value );
        onSearchChange( e.target.value );
    };

    return (
        <Input
            value={term}
            className="form-control search-input"
            placeholder="Type to search"
            onChange={onChangeTerm}
        />
    );
}
