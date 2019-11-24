import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItem ( {
                                       label, onDeleted,
                                       onToggleImportant,
                                       onToggleOmit,
                                       omit, important, added, edited
                                   } ) {

    let classNames      = 'list-item';
    let buttonOmitIcon  = 'times';
    let buttonOmitClass = 'btn btn-outline-dark btn-sm';

    if ( omit ) {
        classNames += ' omit';
        buttonOmitIcon  = 'print';
        buttonOmitClass = 'btn btn-outline-secondary btn-sm';
    }
    if ( important ) {
        classNames += ' important';
    }

    return (
        <div className={classNames}>
            <span className="list-item-label"
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
                            className={buttonOmitClass}
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
        </div>
    );
}
