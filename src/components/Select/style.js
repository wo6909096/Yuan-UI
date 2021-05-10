import styled from 'styled-components';
import CaretDown from 'assets/icons/caret_down.svg';
const StyledSelect = styled.select`
    /* 隐藏默认图标 */
    appearance: none;
    background-image: url(${CaretDown});
    background-repeat: no-repeat;
    background-position: right center;
    background-color: transparent;
    border: none;
    padding-right: 14px;
    font-size: ${({theme}) => theme.normal};
    color: ${({theme}) => theme.grayDark};
    /* 隐藏IE默认图标 */
    ::-ms-expand {
        display: none;
    }
`;
/* 隐藏默认图标 */
export default StyledSelect;