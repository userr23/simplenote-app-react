import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input ( props ) {
    const [ id ] = useState( 'input-' + Date.now() );

    const { label, value, placeholder, disabled, onChange } = props;

    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}</label>
            <input id={id}
                type='text'
                className='form-control'
                placeholder={placeholder}
                autoComplete='off'
                value={value}
                disabled={disabled}
                onChange={onChange}
                    />
        </div>
    );
}

Input.propTypes = {
    label      : PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value      : PropTypes.string.isRequired,
    disabled   : PropTypes.bool,
    onChange   : PropTypes.func.isRequired
};

Input.defaultProps = {
    placeholder: 'Input a value...',
    disabled   : false
};