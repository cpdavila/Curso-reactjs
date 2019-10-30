import React from 'react';
import propTypes from 'prop-types';

const Input = ({label, type, id, value, className, onChange}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type}
                    className={className} 
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required            
            />
        </div>
    )
}

Input.propTypes = {
    label:propTypes.string.isRequired,
    type:propTypes.string.isRequired,
    id:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    className: propTypes.string,
    onChange: propTypes.func.isRequired
}

Input.defaultProps = {
    className: 'clase-por-defecto'
}

export default Input; 