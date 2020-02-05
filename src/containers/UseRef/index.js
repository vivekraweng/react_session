import React, { useEffect, useRef, useState } from 'react';

export const UseRef = () => {
    const inputRef = useRef();
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log("render", inputRef);
        inputRef.current.value = "MC";
    },
    [inputRef]
    );
    return (
        <input
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}