import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import styled              from 'styled-components';

const Wrapper = styled.div`
  margin-left: 0.5rem;

  label {
  color: slategrey;
  }
`;

export default function CheckBox ( { checked, onChange, labelText } ) {
    const [ id ]       = useState( 'input-' + Date.now() );
    const checkedState = checked;
    return (
        <Wrapper className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox"
                   className="custom-control-input"
                   id={id}
                   checked={checked}
                   onChange={() => {
                       onChange( !checkedState );
                   }}
            />
            <label className="custom-control-label" htmlFor={id}>{labelText}</label>
        </Wrapper>
);
}

CheckBox.propTypes = {
    labelText: PropTypes.string,
    checked  : PropTypes.bool.isRequired,
    onChange : PropTypes.func.isRequired
};

CheckBox.defaultProps = {
    labelText: 'Check to change',
};
