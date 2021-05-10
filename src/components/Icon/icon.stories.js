import React from 'react';
import Icon from '.';
import {ReactComponent as DialogIcon } from 'assets/icons/dialog.svg';

export default {
    title:'UI 组件/Icon',
    component: Icon
}

export const Default = () => (
    <div>
        <Icon icon={DialogIcon} width={48} height={48}></Icon>
    </div>
);

