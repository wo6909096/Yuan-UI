import Styled, {css} from 'styled-components';
import {circle} from 'utils/mixins'
const circleMixinFunc = (color, size = '8px') => css`
    content: '';
    display: block;
    position: absolute;
    ${circle(color, size)}
`;

// 容器
const styledAvatar = Styled.div`
    position: relative;
`;
// 头像卡片s
const AvatarClip = Styled.div`
    width: ${({size}) => size};
    height: ${({size}) => size};
    border-radius: 50%;
    overflow: hidden;
`;
const AvatarImg = Styled.img`
    width: 100%;
    height: 100%;
    Object-fit: cover;
    Object-position: center;
`;
const StatusIcon = Styled.div`
    position: absolute;
    left: 2px;
    top: 4px;
    &::before {
        ${({size}) => circleMixinFunc('#fff', size)}

        transform: scale(2);
    }
    &::after {
        ${({size, theme: {green, gray}, status}) => {
            if (status === 'online') {
                return circleMixinFunc(green, size);
            }
            else if (status === 'outline') {
                return circleMixinFunc(gray, size);
            }
        }}
    }
`;

export default styledAvatar;
export {AvatarClip, AvatarImg, StatusIcon};