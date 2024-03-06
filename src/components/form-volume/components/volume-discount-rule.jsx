import { Card, Page, BlockStack, Text, Divider, InlineGrid, Button, Icon, Grid, LegacyCard, InlineStack, Select, } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import "../../style/form.css"
import InputText from '../../common/input-text'
import { PlusCircleIcon } from '@shopify/polaris-icons';
import InputDiscountRule from '../../common/input-discount-rule';
import {
    DeleteIcon
} from '@shopify/polaris-icons';
import SelectDiscountType from '../../common/select-discount-type';
const VolumeDiscountRule = (props) => {
    const { setDataVolume, validate, setValidate, submittedTime } = props;
    const [selectedOption, setSelectedOption] = useState('');
    const [optionArr, setOptionArr] = useState([
        {
            title: "",
            subTitle: "",
            label: "",
            quantity: 1,
            discountType: "",
            amount: "",
        }
    ]);
    const onAddOption = () => {
        setOptionArr([
            ...optionArr,
            {
                title: "",
                subTitle: "",
                label: "",
                quantity: Number(Number(optionArr[optionArr.length - 1].quantity) + 1),
                discountType: "",
                amount: "",

            }
        ])

    }

    // const handleSelectChange = (value) => {
    //     setSelectedOption(value);
    // };
    const onDeleteOption = (index) => {
        const spliceOption = [...optionArr];
        spliceOption.splice(index, 1)
        setOptionArr(spliceOption)
    }
    useEffect(() => {
        setDataVolume(optionArr)
    }, [optionArr,])
    return (
        <div className='rule-container'>
            {/* <div className='title-rule'>
                <Text variant="headingMd" alignment='start' fontWeight='bold' as="h2">
                    Volume Discount Rule
                </Text>
            </div> */}
            <Card roundedAbove="sm" padding={"600"}>
                <Text variant="headingMd" alignment='start' fontWeight='bold' as="h2">
                    Volume Discount Rule
                </Text>
                <Divider borderColor="border" borderWidth='100' />
                <BlockStack gap="400">
                    {
                        optionArr.map((it, index) => {
                            return (
                                <div >
                                    <Divider borderColor="border" borderWidth='050' />
                                    <div className='d-flex justify-content-between option-header'>
                                        <div className='option-style'>
                                            <h2 className='option-title'>Option {index + 1}</h2>
                                        </div>
                                        <Button

                                            disabled={Number(it.quantity) == 1}
                                            onClick={() => onDeleteOption(index)}>
                                            <Icon
                                                source={DeleteIcon}
                                                tone="base"
                                            />
                                        </Button>
                                    </div>
                                    <br />

                                    <InlineGrid key={index} gap="400" columns={3}>
                                        <InputDiscountRule
                                            attributeValue={it.title}
                                            label={"Title"}
                                            attribute={"title"}
                                            index={index}
                                            optionArr={optionArr}
                                            setOptionArr={setOptionArr}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                            isRequired={true}
                                        // handleChildInputChange={handleChildInputChange}
                                        />
                                        <InputDiscountRule
                                            attributeValue={it.subTitle}
                                            label={"subTitle"}
                                            attribute={"subTitle"}
                                            index={index}
                                            optionArr={optionArr}
                                            setOptionArr={setOptionArr}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                        // handleChildInputChange={handleChildInputChange}

                                        />
                                        <InputDiscountRule
                                            attributeValue={it.label}
                                            label={"Label"}
                                            attribute={"label"}
                                            index={index}
                                            optionArr={optionArr}
                                            setOptionArr={setOptionArr}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                        // handleChildInputChange={handleChildInputChange}
                                        />
                                        <InputDiscountRule
                                            attributeValue={it.quantity}
                                            label={"Quantity"}
                                            attribute={"quantity"}
                                            index={index}
                                            optionArr={optionArr}
                                            setOptionArr={setOptionArr}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                            isRequired={true}
                                            // handleChildInputChange={handleChildInputChange}
                                            type={"number"}
                                        />
                                        <SelectDiscountType
                                            label={"DiscountType"}
                                            attribute={"discountType"}
                                            index={index}
                                            optionArr={optionArr}
                                            setOptionArr={setOptionArr}
                                            setSelectedOption={setSelectedOption}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                        />
                                        {
                                            it.discountType !== ""
                                            &&
                                            <InputDiscountRule
                                                attributeValue={it.discountType}
                                                label={"Amount"}
                                                attribute={"amount"}
                                                index={index}
                                                optionArr={optionArr}
                                                setOptionArr={setOptionArr}
                                                validate={validate}
                                                setValidate={setValidate}
                                                submittedTime={submittedTime}
                                                // handleChildInputChange={handleChildInputChange}
                                                type={"number"}
                                                isRequired={true}
                                                icon={it.discountType == "%discount" ? < Text >%</Text> : < Text >$</Text>}
                                            />
                                        }

                                    </InlineGrid>
                                </div>

                            )
                        })
                    }
                    <br />
                    <Divider borderColor="border" borderWidth='050' />
                    <br />
                </BlockStack>
                <Button onClick={onAddOption} fullWidth variant="primary" tone="critical" icon={<Icon source={PlusCircleIcon} />}>Add option</Button>
            </Card>

        </div >
    )
}

export default VolumeDiscountRule