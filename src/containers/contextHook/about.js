import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext, loginContext } from '../../userContext';

export const ContextHookAbout = () => {
    const msg = useContext(UserContext);
    const loginMsg = useContext(loginContext)

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/contextHook/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contextHook/about">About</Link>
                    </li>
                </ul>
            </nav>
            <h1>About</h1>
            <h2>{msg}</h2>
            <h2>{loginMsg}</h2>
        </>
    )
}