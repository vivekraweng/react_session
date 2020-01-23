import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const PropTypesComponent = () => {
    const classes = classnames(styles.buttonWrapper, className);
    return (
        <h1>React world</h1>
    )
}

PropTypesComponent.defaultProps = {
    variant:'outlined',
    color:'default',
    size:'medium'
}

PropTypesComponent.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}