import React from 'react';
import Avatar from '.';
import face from 'assets/images/avatar-1.jpg'

export default {
    title:'UI 组件/Avatar',
    component: Avatar
}

export const Default = () => (
    <div className='row-elements'>
        <Avatar src={face}></Avatar>
        <Avatar src={face} status='outline'></Avatar>
        <Avatar src={face} size='56px'></Avatar>
        <Avatar src={face} size='56px' statusIconSize="12px"></Avatar>
    </div>
)

