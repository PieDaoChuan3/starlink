import React, { Component } from "react";
import { Form, Button, InputNumber } from "antd";

class SatSettingForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form
                name="wrap"
                labelCol={{
                    flex: '110px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                    flex: 1,
                }}
                colon={false}
                className="sat-setting"
                onSubmit={this.showSatellite}
            >
                <Form.Item label="Longitude(degrees)">
                    {getFieldDecorator("longitude", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your Longitude (-180 ~ 180)"
                            }
                        ],
                        initialValue: 70
                    })(
                        <InputNumber
                            min={-180}
                            max={180}
                            style={{ width: "100%" }}
                            placeholder="Please input Longitude (-180 ~ 180)"
                        />
                    )}
                </Form.Item>

                <Form.Item label="Latitude(degrees)">
                    {getFieldDecorator("latitude", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your Latitude (-90 ~ 90)"
                            }
                        ],
                        initialValue: -40
                    })(
                        <InputNumber
                            placeholder="Please input Latitude (-90 ~ 90)"
                            min={-90}
                            max={90}
                            style={{ width: "100%" }}
                        />
                    )}
                </Form.Item>

                <Form.Item label="Elevation(meters)">
                    {getFieldDecorator("elevation", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your Elevation (-413 ~ 8850)"
                            }
                        ],
                        initialValue: 100
                    })(
                        <InputNumber
                            placeholder="Please input Elevation (-413 ~ 8850)"
                            min={-413}
                            max={8850}
                            style={{ width: "100%" }}
                        />
                    )}
                </Form.Item>

                <Form.Item label="Altitude(degrees)">
                    {getFieldDecorator("altitude", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your Altitude (0 ~ 90)"
                            }
                        ],
                        initialValue: 90
                    })(
                        <InputNumber
                            placeholder="Please input Altitude (0 ~ 90)"
                            min={0}
                            max={90}
                            style={{ width: "100%" }}
                        />
                    )}
                </Form.Item>

                <Form.Item label="Duration(secs)">
                    {getFieldDecorator("duration", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your Duration (0 ~ 90)"
                            }
                        ],
                        initialValue: 10
                    })(
                        <InputNumber
                            placeholder="Please input Duration (0 ~ 90)"
                            min={0}
                            max={90}
                            style={{ width: "100%" }}
                        />
                    )}
                </Form.Item>
                <Form.Item className="show-nearby" >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ textAlign: "center" }}
                    >
                        Find Nearby Satellite
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    showSatellite = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                this.props.onShow(values);
            }
        });
    };
}

const SatSetting = Form.create({ name: "satellite-setting" })(SatSettingForm);

export default SatSetting;
