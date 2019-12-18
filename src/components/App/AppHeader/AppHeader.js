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

export default function AppHeader ( { print, omit, total, storageSize } ) {
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
                <p>Total notes: {total}</p>
                {( omit !== 0 ) && <p>{print} available to export, {omit} omitted</p>}
                {( ( omit === 0 ) && ( total !== 0 ) ) && <p>All notes available to export</p>}
                {( !total ) && <p>Type your first note!</p>}
            </InformContainer>
        </Wrapper>
    );
}

AppHeader.propTypes = {
    print      : PropTypes.number,
    omit       : PropTypes.number,
    total      : PropTypes.number,
    storageSize: PropTypes.string
};
