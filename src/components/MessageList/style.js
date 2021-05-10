import StyledMessageCard from 'components/MessageCard/style';
import styled from 'styled-components';

const StyledMessageList = styled.div`
    & > * {
        margin-bottom: 20px;
    }
`;
const CardList = styled.div`
    ${StyledMessageCard} {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`;

export default StyledMessageList;
export {CardList};