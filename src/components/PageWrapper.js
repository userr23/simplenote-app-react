import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.template};
    max-width: 90vw;
    padding: 0 0.5rem;
    margin-left: auto;
    margin-right: auto;
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
