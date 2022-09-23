import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const UseNotificationHook = () => {
    const [show, setShow] = useState(false)
    const location = useLocation()
    useEffect(() => {
        const result =  localStorage.getItem(`Alert${location.pathname}`)
        if (result && result === `"Alert${location.pathname}"`) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [])
    return {show, setShow, location}
};

export default UseNotificationHook;
