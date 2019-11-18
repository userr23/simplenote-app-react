import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${props => props.template};
    height: calc(100% - 56px);
    overflow: hidden;
    
    @media(max-width: 1000px) {
        display: block;
        overflow: auto;
    }
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
    template: '2fr 3fr'
};