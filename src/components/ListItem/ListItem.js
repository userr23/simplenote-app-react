import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItem ( {
                                       id, label, onDeleted,
                                       onToggleImportant,
                                       onToggleOmit,
                                       omit, important, added, edited
                                   } ) {

    let labelClassNames = 'list-item';
    let itemClassNames  = 'list-group-item';
    let buttonOmitIcon  = 'times';

    if ( omit ) {
        itemClassNames += ' omit';
        buttonOmitIcon = 'print';
    }
    if ( important ) {
        itemClassNames += ' important';
        labelClassNames += ' important';
    }

    return (
        <li id={id} className={itemClassNames}>
            <span className={labelClassNames}
                  onClick={() => {
                  }}>
                {label}
            </span>
            <hr />

            <div className="settings-block">
                <span>
                    Added: {added}
                </span>
                {edited &&
                <span>
                    Edited: {edited}
                </span>}
                <span className="buttons-wrapper">
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={() => {
                            }}>
                        <FontAwesomeIcon icon="edit" />
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
                </span>
            </div>
        </li>
    );
}
