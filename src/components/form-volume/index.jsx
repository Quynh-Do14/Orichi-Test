import { Page, Layout, LegacyCard, Grid } from '@shopify/polaris';
import General from './components/general';
import VolumeDiscountRule from './components/volume-discount-rule';
import Preview from './components/preview';
import { useState } from 'react';
function FormVolume() {
    const [dataVolume, setDataVolume] = useState([])
    const [validate, setValidate] = useState({});
    const [_data, _setData] = useState({});
    const [submittedTime, setSubmittedTime] = useState();

    const data = _data;


    const setData = (data) => {
        Object.assign(data, { ...data });
        _setData({ ...data });
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

    return (
        <Page
            title="Product"
        >
            <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <General
                        setData={setData}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
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