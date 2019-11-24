import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItem ( {
                                       label, onDeleted,
                                       onToggleImportant,
                                       onToggleOmit,
                                       omit, important
                                   } ) {

    let classNames      = 'list-item';
    let buttonOmitIcon  = 'times';
    let buttonOmitClass = 'btn btn-outline-dark btn-sm float-right';

    if ( omit ) {
        classNames += ' omit';
        buttonOmitIcon  = 'print';
        buttonOmitClass = 'btn btn-outline-secondary btn-sm float-right';
    }
    if ( important ) {
        classNames += ' important';
    }

    return (
        <span className={classNames}>
            <span className="list-item-label"
                  onClick={() => {
                  }}>
                {label}
            </span>


            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                <FontAwesomeIcon icon="trash-alt" />
            </button>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={() => {
                    }}>
                <FontAwesomeIcon icon="edit" />
            </button>

            <button type="button"
                    title="Omit"
                    className={buttonOmitClass}
                    onClick={onToggleOmit}>
                <FontAwesomeIcon icon={buttonOmitIcon} />
            </button>

            <button type="button"
                    className="btn btn-outline-warning btn-sm float-right"
                    onClick={onToggleImportant}>
                <FontAwesomeIcon icon="exclamation" />
            </button>
        </span>
    );
}
