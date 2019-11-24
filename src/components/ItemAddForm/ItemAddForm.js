import React, { useState } from 'react';
import Input               from '../Input';
import loremGenerator      from '../../utils/loremGenerator';

export default function ItemAddForm ( { onItemAdded, onItemsClear, onItemsPrint } ) {

    const [ label, setLabel ] = useState( '' );

    const onSubmit = ( e ) => {
        e.preventDefault();
        onItemAdded( label ? label : loremGenerator( 1 ) );
        setLabel( '' );
    };

    return (
        <form className="item-add-form d-flex"
              onSubmit={onSubmit}
        >
            <Input
                value={label}
                placeholder="Type your note here"
                disabled="true"
                onChange={e => setLabel( e.target.value )}
            />
            <button type="submit"
                    className="btn btn-success"
            >
                Add Item
            </button>
            <button type="button"
                    className="btn btn-outline-danger"
                    onClick={() => onItemsClear()}
            >
                Clear All
            </button>
            <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => onItemsPrint()}
            >
                Print to PDF
            </button>

        </form>
    );
}
