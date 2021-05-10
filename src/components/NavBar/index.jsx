import React from 'react';
// import PropTypes from 'prop-types';
import StyledNavBar, {StyledMenuItem, MenuIcon, MenuItems} from './style';
import "styled-components/macro";

import Badge from 'components/Badge';
import Avatar from 'components/Avatar';
import face from 'assets/images/avatar-1.jpg';
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons';
function NavBar({...rest}) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={face} status="online"></Avatar>
            <MenuItems>
                <MenuItem showBadge active={1} icon={faCommentDots}/>
                <MenuItem icon={faUsers}/>
                <MenuItem icon={faFolder}/>
                <MenuItem icon={faStickyNote}/>
                <MenuItem icon={faEllipsisH}/>
                <MenuItem icon={faCog} css={`
                    align-self: end;
                `}/>
            </MenuItems>
        </StyledNavBar>
    )
}

function MenuItem ({icon, active = 0, showBadge, ...rest}) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}></MenuIcon>
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

export default NavBar;
export {MenuItem};

