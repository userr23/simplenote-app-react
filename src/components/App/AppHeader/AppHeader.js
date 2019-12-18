import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled              from 'styled-components';
import PropTypes           from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top: 1rem;
    
    h1 {
    flex-grow: 1;
    color: #99B3D5;
    }

    h5 {
    font-size: 0.9rem;
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
            <div>
                <h5>{storageSize}</h5>
                {( omit !== 0 ) && <h5>{print} available to print, {omit} omitted</h5>}
                {( omit === 0 ) && <h5>All {total} notes available to print</h5>}
            </div>
        </Wrapper>
    );
}

AppHeader.propTypes = {
    print      : PropTypes.number,
    omit       : PropTypes.number,
    total      : PropTypes.number,
    storageSize: PropTypes.string
};
