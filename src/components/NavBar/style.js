import Styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {activeBar} from 'utils/mixins'
import StyledAvatar, { StatusIcon } from 'components/Avatar/style';

const StyledNavBar = Styled.nav`
    display: grid;
    grid-template-rows: 1fr 4fr;
    width: 100px;
    height: 100vh;
    background-color: ${({theme}) => theme.darkPurple};
    padding: 30px 0;

    ${StyledAvatar} {
        justify-self: center;
        ${StatusIcon} {
            &::before {
                background-color: ${({theme}) => theme.darkPurple}
            }
        }
    }
`;

const MenuItems = Styled.div`
    display: grid;
    grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

const StyledMenuItem = Styled.div`
    & > a {
        width: 100%;
        height: 74px;

        display: flex;
        align-items: center;
        justify-content: center;
        ${activeBar()};

        ${({active}) => active ? '' : `
            &::before,
            &::after {
                height: 0;
            }
        `};
    }
`;
const MenuIcon = Styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
    opacity: ${({active}) => active ? 1 : 0.3};
`;

export default StyledNavBar;
export {StyledMenuItem, MenuIcon, MenuItems};