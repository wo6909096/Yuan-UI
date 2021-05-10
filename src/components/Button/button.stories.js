import React from 'react';
import Button from '.';
import {ReactComponent as PlusIcon} from 'assets/icons/plus.svg';
import Icon from 'components/Icon';

export default {
    title:'UI 组件/Button',
    component: Button
}

export const Default = () => (
    <div className='row-elements'>
        <Button shape='rect'>点击按钮</Button>
        <Button shape='circle'>
            <Icon icon={PlusIcon} width={12} height={12}></Icon>
        </Button>
    </div>
)

