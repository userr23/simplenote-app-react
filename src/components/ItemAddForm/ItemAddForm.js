import React, { useState } from 'react';
import Form                from '../Form';
import FormActionLine      from '../FormActionLine';
import Input               from '../Input';
import loremGenerator      from '../../utils/loremGenerator';

export default function ItemAddForm ( { onItemAdded, onItemsClear, onItemsPrint } ) {

    const [ label, setLabel ] = useState( '' );

    const onSubmit = ( e ) => {
        e.preventDefault();
        onItemAdded( label ? label : loremGenerator( 1 ) );
        setLabel( '' );
    };

    const actions = [
        {
            id      : 'add',
            type    : 'success',
            text    : 'Add',
            onClick : onSubmit,
            disabled: false
        },
        {
            id      : 'clear',
            type    : 'danger',
            text    : 'Clear All',
            onClick : onItemsClear,
            disabled: false
        },
        {
            id      : 'export',
            type    : 'secondary',
            text    : 'Export to PDF',
            onClick : onItemsPrint,
            disabled: false
        }
    ];

    return (
        <Form>
            <Input
                value={label}
                placeholder="Type your note here"
                onChange={e => setLabel( e.target.value )}
            />
            <FormActionLine
                actions={actions}
            />
        </Form>

    );
}
