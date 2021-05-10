import React from 'react';
import Badge from '.';
import Icon from 'components/Icon';
import {ReactComponent as DialogIcon } from 'assets/icons/dialog.svg';

export default {
    title:'UI 组件/Badge',
    component: Badge
}
export const Default = () => {
    return <Badge count={3} showZero></Badge>
}
export const Dot = () => {
    return <Badge show><Icon icon={DialogIcon} width={48} height={48}></Icon></Badge>
}
