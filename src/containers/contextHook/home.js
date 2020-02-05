import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext, loginContext } from '../../userContext';
import { Button } from '../../components/Button';

export const ContextHookHome = () => {
    const [value, setValue] = useContext(UserContext);
    const [loginValue, setLoginValue] = useContext(loginContext)

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
            <h1>Home</h1>
            <h2>value: {value}</h2>
            <h2>loginValue: {loginValue}</h2>

            <Button size='small' onClick={() => setValue('updated value')} >Click me</Button>
            <br/>
            <br/>
            <br/>
            <Button size='small' onClick={() => setLoginValue('updated Login value')} >Click me</Button>
        </>
    )
}
