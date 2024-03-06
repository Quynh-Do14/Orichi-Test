import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { volumeDiscount } from './store/actions/volumeDiscount';
import { Select } from '@shopify/polaris';

const SelectDiscountType = (props) => {
    const {
        label,
        setOptionArr,
        optionArr,
        index,
        attribute,
        submittedTime,
        setSelectedOption
    } = props;
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const onChange = (e) => {
        setValue(e || "");
        setSelectedOption(e)
        setOptionArr(prev => {
            prev[index] = {
                ...prev[index],
                [attribute]: e || '',
            }
            return prev;
        });
        dispatch(
            volumeDiscount({
                data: optionArr
            })
        )
        setOptionArr(prev => {
            prev[index] = {
                ...prev[index],
                [attribute]: e || '',
            }
            return prev;
        });
    };

    return (
        <Select
            label={label}
            options={[
                { label: 'None', value: '' },
                { label: '% discount', value: '%discount' },
                { label: 'Discount / each', value: 'Discount/each' },
            ]}
            value={value}
            onChange={onChange}
        />
    )
}

export default SelectDiscountType