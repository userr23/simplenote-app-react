import React  from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export default function Form ( { className, children } ) {
    return (
        <StyledForm
            className={className}
            onSubmit={preventDefault}
        >
            {children}
        </StyledForm>
    );
}

// helpers
function preventDefault ( e ) {
    e.preventDefault();
    e.stopPropagation();
}
