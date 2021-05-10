import styledAvatar from 'components/Avatar/style';
import Badge from 'components/Badge';
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';
import styled, { css } from 'styled-components';
import { activeBar, card } from 'utils/mixins';

// 用户昵称 attrs方法 可以直接给组件传递 props属性
const Name = styled(Text).attrs({size: 'large'})`
    grid-area: name;
`;
// 消息时间
const Time = styled(Text).attrs({size: 'medium', type: 'secondary'})`
    grid-area: time;
    justify-self: end;
`;
// 状态 在线 or 离线
const Status = styled(Text).attrs({type: 'secondary'})`
    grid-area: status;
`;
// 消息内容 和 徽章 的容器
const Message = styled.div`
    grid-area: message;
    display: grid;
    grid-template-columns: 1fr 30px;
    align-items: center;
    /* 如果最后一条是自己回复的消息 则显示 回复 Icon */
    ${({ replied }) =>
        replied &&
        css`
            grid-template-columns: 24px 1fr 30px;
        `
    }
`;
// 消息内容
const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;
// 未读消息数 徽章
const UnreadBadge = styled(Badge)`
    justify-self: end;
`;


const StyledMessageCard = styled.div`
    ${card()}
    display: grid;
    grid-template-areas:
        "avatar name time"
        "avatar status status"
        " message message message";
    grid-template-columns: 64px 1fr 1fr;
    row-gap: 16px;
    background: ${({theme}) => theme.background};
    transition: all 0.4s;
    &:hover {
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
    }
    ${styledAvatar} {
        grid-area: avatar;
    }
    /* 选中的样式 */
    ${({active}) =>
        active &&
        css`
            background: ${({theme}) => theme.darkPurple};
            ${Name}, ${Status}, ${Time}, ${MessageText} {
                color: white;
            }
            ${Status}, ${Time} {
                opacity: 0.4;
            }
            ${activeBar({barWidth: '4px', shadowWidth: '14px'})}
            /* 隐藏指示条露在外面的部分 */
            overflow: hidden;
        `
    }
`;

export default StyledMessageCard;
export {Name, Time, Status, Message, MessageText, UnreadBadge};