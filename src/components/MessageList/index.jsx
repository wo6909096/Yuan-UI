import React from 'react';
import PropTypes from 'prop-types';
import StyledMessageList, {CardList} from './style';
import Filter from 'components/Filter';
import Option from 'components/Option';
import Select from 'components/Select';
import Button from 'components/Button';
import Input from 'components/Input';
import Icon from 'components/Icon';
import {ReactComponent as PlusIcon} from 'assets/icons/plus.svg'
import MessageCard from 'components/MessageCard';

import avatar from 'assets/images/avatar-1.jpg'
function MessageList({children, ...rest}) {
    return (
        <StyledMessageList {...rest}>
            <Input.Search />
            <ChatFilter />
            <CardList>
                {
                    [1,2,3,4,5,6].map((_, index) => (
                        <MessageCard
                            name="李元元"
                            avatarSrc={avatar}
                            avatarStatus="online"
                            statusText="在线"
                            time="3 小时之前"
                            message="即使爬到最高的山上，一次也只能脚踏实地的即使爬到最高的山上，一次也只能脚踏实地的"
                            unreadCount={index + 1}
                            active={index === 1}
                            replied={index / 3 === 0}
                            key={index}
                        />
                    ))
                }
            </CardList>
        </StyledMessageList>
    )
}

function ChatFilter() {
    return (
        <Filter>
            <Filter.Filters label="列表排序">
                <Select>
                    <Option>最新消息优先</Option>
                    <Option>在线好友优先</Option>
                </Select>
            </Filter.Filters>
            <Filter.Action label="创建会话">
                <Button shape="circle">
                    <Icon icon={PlusIcon} width={14} height={14}/>
                </Button>
            </Filter.Action>
        </Filter>
    )
}

MessageList.propTypes = {
    children: PropTypes.any
}

export default MessageList

