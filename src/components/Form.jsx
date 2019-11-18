import React  from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
`;

export default function form ( { children } ) {
    return (
        <Form onSubmit={preventDefault}>
            {children}
        </Form>
    );
}

// helpers
function preventDefault ( e ) {
    e.preventDefault();
    e.stopPropagation();
}