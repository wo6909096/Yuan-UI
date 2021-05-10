import React from 'react';
import Text from '.';

export default {
    title:'排版/Text',
    component: Text
}

export const Default = () => (
    <div>
        <Text>模板</Text>
        <Text type="secondary">模板</Text>
        <Text type="danger">模板</Text>
        <Text size="xxsmall">模板</Text>
        <Text size="xsmall" type="secondary">模板</Text>
        <Text size="small" type="danger">模板</Text>
        <Text size="medium" type="danger">模板</Text>
        <Text size="medium" type="danger" bold>模板</Text>
    </div>
)

