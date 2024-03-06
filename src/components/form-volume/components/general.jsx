import React, { useState, useCallback } from 'react'
import { Form, FormLayout, Checkbox, TextField, Button, Page, Layout, LegacyCard, Card, BlockStack, Text, } from '@shopify/polaris';
import InputText from '../../common/input-text';

const General = (props) => {
    const { setData, validate, setValidate, submittedTime } = props;
    const handleSubmit = useCallback(() => {
    }, []);

    return (
        <Card roundedAbove="sm" padding={"600"}>
            <BlockStack gap="400">
                <Text variant="headingMd" alignment='start' fontWeight='bold' as="h2">
                    General
                </Text>
                <Form onSubmit={handleSubmit}>
                    <FormLayout>
                        <InputText
                            label={"Campaign"}
                            setData={setData}
                            attribute={"campaign"}
                            validate={validate}
                            setValidate={setValidate}
                            submittedTime={submittedTime}
                            isRequired={true}
                        />
                        <InputText
                            label={"Title"}
                            setData={setData}
                            attribute={"title"}
                            validate={validate}
                            setValidate={setValidate}
                            submittedTime={submittedTime}
                        />
                        <InputText
                            label={"Description"}
                            setData={setData}
                            attribute={"description"}
                            validate={validate}
                            setValidate={setValidate}
                            submittedTime={submittedTime}
                        />
                    </FormLayout>
                </Form>
            </BlockStack>
        </Card>
    )
}

export default General