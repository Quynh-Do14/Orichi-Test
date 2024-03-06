import { TextField } from '@shopify/polaris'
import React, { useState, useCallback, useEffect } from 'react'
import { validateFields } from '../utils/helper';

const InputText = (props) => {
    const { label,
        setData,
        attribute,
        validate,
        setValidate,
        submittedTime,
        isRequired = false
    } = props;

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e || "");
        setData({
            [attribute]: e || ''
        });
    };

    const onBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, attribute, !value, setValidate, validate, !value ? `Vui lòng nhập ${label}` : "");
        }
    };
    console.log('validate', validate);

    useEffect(() => {
        if (submittedTime != null) {
            onBlur(true);
        }
    }, [submittedTime]);

    return (
        <TextField
            value={value}
            onChange={onChange}
            label={label}
            type="text"
            autoComplete=""
            onBlur={() => onBlur(false)}
            helpText={
                <span className='style-validate'>
                    {validate[attribute]?.message}
                </span>
            }
        />
    )
}

export default InputText