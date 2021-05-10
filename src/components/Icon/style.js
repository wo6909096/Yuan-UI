import Styled from 'styled-components';

const StyledIcon = Styled.div`
    display: inline-flex;
    align-item: center;
    justify-content: center;

    svg,
    svg * {
        color: ${({color}) => color};
        opacity: ${({opacity}) => opacity};
    }
`;

export default StyledIcon;