import React from 'react';
import PropTypes from 'prop-types';
import StyledOption from './style';
function Option({children, ...rest}) {
    return (
        <StyledOption {...rest}>{children}</StyledOption>
    )
}

Option.propTypes = {

}

export default Option

