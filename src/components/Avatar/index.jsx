import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar, {StatusIcon, AvatarClip, AvatarImg} from './style';
function Avatar({src, size = '48px', status = 'online', statusIconSize = '8px', ...rest}) {
    console.log('src', src);
    return (
        <StyledAvatar {...rest}>
            <StatusIcon status={status} size={statusIconSize}></StatusIcon>
            <AvatarClip size={size}>
                <AvatarImg src={src}/>
            </AvatarClip>
        </StyledAvatar>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(['online', 'outline']),
    statusIconSize: PropTypes.string
}

export default Avatar

