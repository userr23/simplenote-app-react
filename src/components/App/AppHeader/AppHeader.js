import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled              from 'styled-components';
import PropTypes           from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem auto 2rem;
   
    h1 {
      flex-grow: 1;
      color: #99B3D5;
    }
`;

const InformContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    p {
      margin: 0;
      font-size: 0.9rem;
      text-align: end;
      color: #C4CCD0;
    }
`;

export default function AppHeader ( { editedCount, exportCount, omitCount, total, storageSize } ) {

    const exportInfoMessage = omitCount
        ? `${exportCount} available to export, ${omitCount} omitted`
        : total
            ? 'All notes available to export'
            : 'Type your first note!';

    const editedInfoMessage = editedCount
        ? `Total notes: ${total} (${editedCount} edited)`
        : `Total notes: ${total}`;

    return (
        <Wrapper>
            <h1>
                SimpleNote
                <sup>
                    <FontAwesomeIcon icon={[ 'fab', 'react' ]} />
                </sup>
            </h1>
            <InformContainer>
                <p>{storageSize}</p>
                <p>{editedInfoMessage}</p>
                <p>{exportInfoMessage}</p>
            </InformContainer>
        </Wrapper>
    );
}

AppHeader.propTypes = {
    exportCount: PropTypes.number,
    omitCount  : PropTypes.number,
    total      : PropTypes.number,
    storageSize: PropTypes.string
};
