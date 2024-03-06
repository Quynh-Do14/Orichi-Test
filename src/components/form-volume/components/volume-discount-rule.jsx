import { Card, Page, BlockStack, Text, Divider, InlineGrid, Button, Icon, Grid, LegacyCard, InlineStack, Select, } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import "../../style/form.css"
import InputText from '../../common/input-text'
import { PlusCircleIcon } from '@shopify/polaris-icons';
import InputDiscountRule from '../../common/input-discount-rule';
import {
    DeleteIcon
} from '@shopify/polaris-icons';
const VolumeDiscountRule = (props) => {
    const { setDataVolume, validate, setValidate, submittedTime } = props;
    const [optionArr, setOptionArr] = useState([
        {
            title: "",
            subTitle: "",
            label: "",
            quantity: 1,
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
                amount: "",

            }
        ])

    }
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (value) => {
        setSelectedOption(value);
    };
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
            <Card roundedAbove="lg" padding={"600"}>
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
                                    <div className='d-flex justify-content-between'>
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


                                    <InlineGrid key={index} gap="400" columns={3}>
                                        <InputDiscountRule
                                            attributeValue={it.title}
                                            label={"Title"}
                                            attribute={"title"}
                                            index={index}
                                            setOptionArr={setOptionArr}
                                            optionArr={optionArr}
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
                                            setOptionArr={setOptionArr}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                            isRequired={true}
                                            // handleChildInputChange={handleChildInputChange}
                                            optionArr={optionArr}
                                            type={"number"}
                                        />
                                        {/* <InputDiscountRule
                                            attributeValue={it.discountType}
                                            label={"DiscountType"}
                                            attribute={"discountType"}
                                            index={index}
                                            setOptionArr={setOptionArr}
                                            validate={validate}
                                            setValidate={setValidate}
                                            submittedTime={submittedTime}
                                            // handleChildInputChange={handleChildInputChange}
                                            type={"number"}
                                        /> */}
                                        <Select
                                            label="DiscountType"
                                            options={[
                                                { label: 'None', value: '' },
                                                { label: '% discount', value: '%discount' },
                                                { label: 'Discount / each', value: 'Discount/each' },
                                            ]}
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                        />
                                        {
                                            selectedOption !== ""
                                            &&
                                            <InputDiscountRule
                                                attributeValue={it.discountType}
                                                label={"Amount"}
                                                attribute={"amount"}
                                                index={index}
                                                setOptionArr={setOptionArr}
                                                validate={validate}
                                                setValidate={setValidate}
                                                submittedTime={submittedTime}
                                                // handleChildInputChange={handleChildInputChange}
                                                type={"number"}
                                                isRequired={true}
                                                icon={selectedOption == "%discount" ? < Text >%</Text> : < Text >$</Text>}
                                            />
                                        }

                                    </InlineGrid>
                                </div>

                            )
                        })
                    }

                    <Divider borderColor="border" borderWidth='050' />
                    <br />
                </BlockStack>
                <Button onClick={onAddOption} fullWidth variant="primary" tone="critical" icon={<Icon source={PlusCircleIcon} />}>Add option</Button>
            </Card>

        </div >
    )
}

export default VolumeDiscountRule