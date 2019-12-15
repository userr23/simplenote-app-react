import React, { useState } from 'react';
import Form                from '../../Form';
import FormActionLine      from '../../FormActionLine';
import Input               from '../../Input';
import CheckBox            from '../../CheckBox';
import loremGenerator      from '../../../utils/loremGenerator';
import styled              from 'styled-components';

const AddForm = styled( Form )`
    margin: 1rem 0 0;
    padding: 1rem;
    background-color: #2A3D4C;
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CheckBoxesWrapper = styled.div`
  flex-direction: column;
`;

export default function ItemAddForm ( { onItemAdded, onItemsClear, onItemsPrint,
                                          panelVisible, onPanelVisibleCheck,
                                          sortDescending, onSortDescending } ) {

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
        <AddForm>
            <Input
                value={label}
                placeholder="Type your note here"
                onChange={e => setLabel( e.target.value )}
            />

            <LineWrapper>
                <FormActionLine
                    actions={actions}
                />
                <CheckBoxesWrapper>
                    <CheckBox
                        labelText="Show filter panel"
                        checked={panelVisible}
                        onChange={onPanelVisibleCheck}
                    />
                    <CheckBox
                        labelText="Sort descending"
                        checked={sortDescending}
                        onChange={onSortDescending}
                    />
                </CheckBoxesWrapper>
            </LineWrapper>
        </AddForm>

    );
}
