import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const Wrapper = styled.div`
    margin: 0;
`;

export default function FormActionLine ( { actions } ) {
    return (
        <Wrapper className='btn-group'>
            {actions.map( ( { id, type = 'primary', text, onClick, disabled = false } ) => {
                return (
                    <button key={id}
                            className={`btn btn-${type}`}
                            onClick={onClick}
                            disabled={disabled}
                    >
                        {text}
                    </button>
                );
            } )}
        </Wrapper>
    );
}

FormActionLine.propTypes = {
    actions: PropTypes.arrayOf( PropTypes.shape( {
        id      : PropTypes.string.isRequired,
        type    : PropTypes.string,
        text    : PropTypes.string.isRequired,
        onClick : PropTypes.func.isRequired,
        disabled: PropTypes.bool
    } ) ).isRequired
};
