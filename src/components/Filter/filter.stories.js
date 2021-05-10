import Button from 'components/Button';
import Option from 'components/Option';
import Select from 'components/Select';
import {ReactComponent as PlusIcon} from 'assets/icons/plus.svg';
import React from 'react';
import Filter from '.';
import Icon from 'components/Icon';

export default {
    title:'UI 组件/Filter',
    component: Filter
}

export const Default = () => (
    <Filter>
        <Filter.Filters label='创建排序'>
            <Select>
                <Option>第一</Option>
                <Option>第二</Option>
            </Select>
        </Filter.Filters>
        <Filter.Action label='创建会话'>
            <Button shape='circle'>
                <Icon icon={PlusIcon} width={14} height={14}></Icon>
            </Button>
        </Filter.Action>
    </Filter>
)

