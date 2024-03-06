import { Page, Layout, LegacyCard, Grid, Icon, Button } from '@shopify/polaris';
import General from './components/general';
import VolumeDiscountRule from './components/volume-discount-rule';
import Preview from './components/preview';
import { useState } from 'react';
import {
    ArrowLeftIcon
} from '@shopify/polaris-icons';

function FormVolume() {
    const [dataVolume, setDataVolume] = useState([])
    const [validate, setValidate] = useState({});
    const [submittedTime, setSubmittedTime] = useState();
    const [dataSubmit, setDataSubmit] = useState();
    const [_data, _setData] = useState({});
    const dataGeneral = _data;


    const setDataGeneral = (data) => {
        Object.assign(dataGeneral, { ...data });
        _setData({ ...dataGeneral });
    };
    const isValidData = () => {
        let allRequestOK = true;

        setValidate({ ...validate });

        Object.values(validate).forEach((it) => {
            if (it.isError === true) {
                allRequestOK = false;
            }
        });

        return allRequestOK;
    };
    const onSubmit = async () => {
        await setSubmittedTime(Date.now());
        if (isValidData()) {
            await setDataSubmit({
                campaign: dataGeneral.campaign,
                title: dataGeneral.title,
                description: dataGeneral.description,
                volumeRule: dataVolume

            },)
        }
    }
    console.log('dataSubmit', dataSubmit);
    return (
        <Page
            titleMetadata={
                <Button
                    onClick={onSubmit}>
                    <Icon
                        source={ArrowLeftIcon}
                        tone="base"
                    />
                </Button>
            }
            title="Create Volume Discount"
        >
            <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <General
                        setData={setDataGeneral}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                    <br />
                    <VolumeDiscountRule
                        setDataVolume={setDataVolume}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <Preview dataPreview={dataVolume} />
                </Grid.Cell>
            </Grid>

        </Page>
    );
}
export default FormVolume