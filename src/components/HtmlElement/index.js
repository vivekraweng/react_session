import React from 'react';

export const HtmlElement = ({type, value, onClick, style, className}) => {
    return (
        <>
            <input type = {type} value={value} onClick={onClick} style={style} className={className} />
        </>
    )
}

