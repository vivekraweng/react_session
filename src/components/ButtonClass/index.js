import React , {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.scss';

class Button extends Component {
    render(){
        const { children, style, className, color, size, radius, href, onClick, link } = this.props;
        const colorOptions = ['primary', 'success', 'warning', 'danger'];
        const sizeOptions = ['big', 'normal', 'small'];
        const classes = classnames(
            'button', 
            `button-${colorOptions.includes(color) ? color: 'primary'}`, 
            `button-${sizeOptions.includes(size) ? size: 'normal'}`, 
            radius? 'button-radius': '', 
            className
        );
        return (
            link ?
            <a 
                href={href} 
                className='link' 
                style={{ ...style }} 
                {...this.props} 
                onClick={onClick}
            >
                {children}
            </a>
            :
            <a 
                href={href} 
                className={classes} 
                style={{ ...style }} 
                type='button' 
                onClick={onClick} 
                {...this.props}
            >
                {children}
            </a>
        )
    }
}

Button.defaultProps = {
    color: 'primary',
    size: 'normal'
}
  
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
    size: PropTypes.oneOf(['big', 'normal', 'small']),
    href: PropTypes.string,
    radius: PropTypes.bool,
    link: PropTypes.bool,
}

export { Button };