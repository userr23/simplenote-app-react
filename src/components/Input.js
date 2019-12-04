import React, { useState } from 'react';
import PropTypes           from 'prop-types';

export default function Input ( props ) {
    const [ id ] = useState( 'input-' + Date.now() );
    return (
        <input id={id}
               type='text'
               className='form-control'
               autoComplete='off'
               {...props}
        />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value      : PropTypes.string.isRequired,
    onChange   : PropTypes.func.isRequired
};

Input.defaultProps = {
    placeholder: 'Input a value...',
};
