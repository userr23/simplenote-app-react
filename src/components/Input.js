import React, { useState } from 'react';
import PropTypes           from 'prop-types';

export default function Input ( props ) {
    const [ id ] = useState( 'input-' + Date.now() );

    const { value, placeholder, onChange } = props;

    return (
        <input id={id}
               type='text'
               className='form-control'
               placeholder={placeholder}
               autoComplete='off'
               value={value}
               onChange={onChange}
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
