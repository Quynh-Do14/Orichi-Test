
import {
    IndexTable,
    LegacyCard,
    useIndexResourceState,
    Text,
    Badge,
} from '@shopify/polaris';
import React from 'react';

const Preview = (props) => {
    const { dataPreview = [] } = props;
    const resourceName = {
        singular: 'order',
        plural: 'orders',
    };
    const rowMarkup = dataPreview?.map((it, index,) => (
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
        <LegacyCard>
            <IndexTable
                resourceName={resourceName}
                itemCount={dataPreview.length}
                headings={[
                    { title: 'Title' },
                    { title: 'Discount Type' },
                    { title: 'Quantity' },
                    { title: 'Amount' },
                ]}
            >
                {rowMarkup}
            </IndexTable>
        </LegacyCard>
    );
}
export default Preview