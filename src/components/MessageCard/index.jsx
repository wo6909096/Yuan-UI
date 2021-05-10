import React from 'react';
import PropTypes from 'prop-types';
import StyledMessageCard, {Name, Time, Status, Message, MessageText, UnreadBadge} from './style';
import Avatar from 'components/Avatar';

import { ReactComponent as Replied } from "assets/icons/replied.svg";
import Icon from 'components/Icon';
import { useTheme } from 'emotion-theming';
function MessageCard({
    avatarSrc,
    avatarStatus,
    statusText,
    name,
    time,
    message,
    unreadCount,
    active,
    replied,
    children,
    ...rest
}) {
    const theme = useTheme();
    return (
        <StyledMessageCard active={active} {...rest}>
            <Avatar Status={avatarStatus} src={avatarSrc}/>
            <Name>{name}</Name>
            <Time>{time}</Time>
            <Status>{statusText}</Status>
            <Message replied={replied}>
                {replied &&(
                    <Icon
                        width={16}
                        height={16}
                        icon={Replied}
                        color={active ? theme.inactiveColorDark : theme.inactiveColor}
                        option={active ? 0.4 : 1}
                        style={{
                            justifyContent: "start",
                        }}
                    />
                )}
                <MessageText>{message}</MessageText>
                <UnreadBadge count={unreadCount} />
            </Message>
        </StyledMessageCard>
    )
}
MessageCard.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    avatarStatus: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
    message: PropTypes.any,
    unreadCount: PropTypes.number,
    active: PropTypes.bool,
    replied: PropTypes.bool,
    children: PropTypes.any
}

export default MessageCard;

