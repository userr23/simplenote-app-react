import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.template};
    max-width: 100vw;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #484F56;
`;

export default function PageWrapper ( { children, ...rest } ) {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    );
}

PageWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    template: PropTypes.string
};

PageWrapper.defaultProps = {
    template: '40rem'
};
