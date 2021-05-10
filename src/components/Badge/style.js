import Styled, {css} from 'styled-components';
import {circle} from 'utils/mixins';
const variants = {
    dot: css`
        position: relative;
        padding: 5px;
        &::after {
            content: '';
            display: ${({show}) => show ? 'block' : 'none'};
            position: absolute;
            top: 0;
            left: 0;
            ${({theme}) => circle(theme.red, '8px')};
        }
    `,
    default: css`
        ${({theme}) => circle(theme.red, '24px')};
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 18px 40px 0 rgba(0, 0, 0, 0.04),
            0 6px 12px 0 rgba(0, 0, 0, 0.08);
        ${(showZero, count) => !showZero && count === 0 && `visibility: hidden`};
    `
}

const Count = Styled.div`
    font-size: ${({theme}) => theme.normal};
    line-height: ${({theme}) => theme.normal};
    color: #fff;
`;

const StyledBadge = Styled.div`
    display: inline-block;
    ${({variant}) => variants[variant]};
`;

export default StyledBadge;
export {Count};