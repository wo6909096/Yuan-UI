import styled, {css} from 'styled-components';
import Text from 'components/Text';
import StyledText from 'components/Text/style';
const styledParagraph = styled(StyledText)`
    ${({ ellipsis }) =>
        ellipsis &&
        css`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `
    }
`;

export default styledParagraph;