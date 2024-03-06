
import {
    IndexTable,
    LegacyCard,
    useIndexResourceState,
    Text,
    Badge,
    Card,
} from '@shopify/polaris';
import React from 'react';
import { useSelector } from 'react-redux';


const Preview = (props) => {
    const { dataPreview = [] } = props;
    const selector = useSelector(
        data => data,
    );

    const resourceName = {
        singular: 'order',
        plural: 'orders',
    };
    const rowMarkup = dataPreview && dataPreview?.map((it, index,) => (
        <IndexTable.Row
            id={index}
            key={index}
            position={index}
        >
            <IndexTable.Cell>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                    {it.title}
                </Text>
            </IndexTable.Cell>
            <IndexTable.Cell>{it.discountType}</IndexTable.Cell>
            <IndexTable.Cell>{it.quantity}</IndexTable.Cell>
            <IndexTable.Cell>{it.amount}</IndexTable.Cell>
        </IndexTable.Row>
    ),
    );

    return (
        <Card roundedAbove="sm" padding={"600"}>
            <Text variant="headingMd" alignment='start' fontWeight='bold' as="h2">
                General
            </Text>
            <br />
            <Text variant="headingMd" alignment='center' fontWeight='bold' as="h2">
                Buy more and save
            </Text>
            <br />
            <Text variant="headingMd" alignment='start' fontWeight='bold' as="h2">
                Apply for all product in store
            </Text>
            <br />
            <IndexTable
                resourceName={resourceName}
                itemCount={dataPreview && dataPreview?.length}
                headings={[
                    { title: 'Title' },
                    { title: 'Discount Type' },
                    { title: 'Quantity' },
                    { title: 'Amount' },
                ]}
            >
                {rowMarkup}
            </IndexTable>
        </Card>
    );
}
export default Preview