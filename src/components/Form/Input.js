import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({name, ...restProps})
{
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        })
    }, []);

    return (
        <input ref={inputRef} {...restProps}/>
    )
}