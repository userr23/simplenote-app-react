import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItem ( {
                                       id, label, onDeleted, onEditLabel,
                                       onToggleImportant,
                                       onToggleOmit, onToggleEdit, edit,
                                       omit, important, added, edited
                                   } ) {

    const [ value, setValue ] = useState( label );

    const onFinish = () => {
        onEditLabel( id, value );
    };

    let labelClassNames = 'list-item';
    let itemClassNames  = 'list-group-item';
    let buttonOmitIcon  = 'times';
    let buttonEditIcon  = 'edit';
    let labelContainer;

    if ( omit ) {
        itemClassNames += ' omit';
        buttonOmitIcon = 'print';
    }
    if ( important ) {
        itemClassNames += ' important';
        labelClassNames += ' important';
    }

    if ( edit ) {
        itemClassNames += ' edit';
        buttonEditIcon = 'times';
    }

    if ( edit ) {
        labelContainer = ( <textarea
            value={value}
            placeholder="Type your note here"
            onChange={e => setValue( e.target.value )}
            onBlur={onFinish}
        /> );
    } else {
        labelContainer = <span className={labelClassNames}>{label}</span>;

    }

    return (
        <li id={id} className={itemClassNames}>
            {labelContainer}
            <hr />

            <div className="settings-block">
                <span>
                    Added: {added}
                </span>
                {edited &&
                <span>
                    Edited: {edited}
                </span>}
                <div className="buttons-wrapper">
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={onToggleEdit}>
                        <FontAwesomeIcon icon={buttonEditIcon} />
                    </button>

                    <button type="button"
                            className="btn btn-outline-warning btn-sm"
                            onClick={onToggleImportant}>
                        <FontAwesomeIcon icon="exclamation" />
                    </button>

                    <button type="button"
                            title="Omit"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={onToggleOmit}>
                        <FontAwesomeIcon icon={buttonOmitIcon} />
                    </button>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={onDeleted}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </button>
                </div>
            </div>
        </li>
    );
}
