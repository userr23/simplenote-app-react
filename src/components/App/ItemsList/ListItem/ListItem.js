import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemEditForm        from '../../ItemEditForm';

export default function ListItem ( {
                                       id, label, onDeleted, onEditLabel,
                                       onToggleImportant,
                                       onToggleOmit, onToggleEdit, edit,
                                       omit, important, added, edited
                                   } ) {

    let labelClassNames          = 'list-item';
    let footerClassName          = '';
    let itemClassNames           = 'list-group-item';
    let buttonOmitIcon           = 'times';
    let buttonImportantClassName = 'btn btn-outline-warning btn-sm';
    let buttonEditIcon           = 'edit';
    let labelContainer;

    const onEdit = () => {
        if ( !edit ) {
            onToggleEdit( id );
        }
    };

    if ( omit ) {
        itemClassNames += ' omit';
        buttonOmitIcon = 'print';
    }
    if ( important ) {
        itemClassNames += ' important';
        labelClassNames += ' important';
        buttonImportantClassName = 'btn btn-warning btn-sm';
    }

    if ( edit ) {
        itemClassNames += ' edit';
        footerClassName = 'invisible';
        buttonEditIcon  = 'check';
    }

    if ( edit ) {
        labelContainer = ( <ItemEditForm
            id={id}
            label={label}
            onEditLabel={onEditLabel}
            onToggleEdit={onToggleEdit}
        /> );
    } else {
        labelContainer = <span className={labelClassNames}>{label}</span>;

    }

    return (
        <li id={id} className={itemClassNames}>
            {labelContainer}

            <div className={footerClassName}>
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
                                onClick={onEdit}>
                            <FontAwesomeIcon icon={buttonEditIcon} />
                        </button>

                        <button type="button"
                                className={buttonImportantClassName}
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
            </div>
        </li>
    );
}
