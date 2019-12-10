import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled              from 'styled-components';
import PropTypes           from 'prop-types';

const Wrapper = styled.div`
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top: 1rem;
`;

export default function AppHeader ( { print, omit, total } ) {
    return (
        <Wrapper className="app-header d-flex">
            <h1>
                SimpleNote
                <sup>
                    <FontAwesomeIcon icon={[ 'fab', 'react' ]} />
                </sup>
            </h1>
            {( omit !== 0 ) && <h5>{print} available to print, {omit} omitted</h5>}
            {( omit === 0 ) && <h5>All {total} notes available to print</h5>}
        </Wrapper>
    );
}

AppHeader.propTypes = {
    print: PropTypes.number,
    omit : PropTypes.number,
    total: PropTypes.number
};
