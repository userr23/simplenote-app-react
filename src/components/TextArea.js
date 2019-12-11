import React, { useState } from 'react';
import PropTypes           from 'prop-types';

export default function TextArea ( props ) {
    const [ id ] = useState( 'text-area-' + Date.now() );
    return (
        <textarea id={id}
                  className='form-control'
                  {...props}
        />
    );
}

TextArea.propTypes = {
    name       : PropTypes.string,
    rows       : PropTypes.string,
    placeholder: PropTypes.string,
    value      : PropTypes.string.isRequired,
    onChange   : PropTypes.func.isRequired
};

TextArea.defaultProps = {
    rows       : '7',
    name       : 'text',
    placeholder: 'Input a value...'
};
