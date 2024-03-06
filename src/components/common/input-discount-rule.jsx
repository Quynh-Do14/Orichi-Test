import { TextField } from '@shopify/polaris'
import React, { useState, useCallback, useEffect } from 'react'
import { validateFields } from '../utils/helper';

const InputDiscountRule = (props) => {
    const {
        label,
        setOptionArr,
        optionArr,
        index,
        attribute,
        attributeValue,
        type,
        validate,
        setValidate,
        submittedTime,
        isRequired = false,
        icon
    } = props;
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e || "");
        setOptionArr(prev => {
            prev[index] = {
                ...prev[index],
                [attribute]: e || '',
            }
            return prev;
        });
    };


    const onBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, `${attribute}${index}`, !value, setValidate, validate, !value ? `Vui lòng nhập ${label}` : "");
        }
    };
    console.log('validate', validate);

    useEffect(() => {
        if (submittedTime != null) {
            onBlur(true);
        }
    }, [submittedTime]);


    useEffect(() => {
        if (attributeValue) {
            setValue(attributeValue || '');
        }

    }, [attributeValue]);
    return (
        <TextField
            value={value}
            onChange={onChange}
            onBlur={() => onBlur(false)}
            label={label}
            type={type || "text"}
            autoComplete=""
            suffix={icon}
            helpText={
                <span>
                    <span className='style-validate'>
                        {validate[`${attribute}${index}`]?.message}
                    </span>
                </span>
            }
        />
    )
}

export default InputDiscountRule