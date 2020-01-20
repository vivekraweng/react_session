import React from 'react';

export const HtmlElement = (props) => {
    return (
        <>
            <input type = {props.type} value={props.value} onClick={props.onClick} style={props.style} className={props.className} />
        </>
    )
}