import React from 'react';
import PropTypes from 'prop-types';
import StyledBadge, {Count} from './style';
function Badge({
    children,
    show = false, // 控制dot状态 组件的展示隐藏
    count = 0,
    showZero = false, // 控制 default状态 组件的展示隐藏
    ...rest
}) {
    return (
        <StyledBadge
            variant={children ? 'dot' : 'default'}
            show={show}
            count={count}
            showZero={showZero}
            {...rest}
        >
            {children || <Count>{count}</Count>}
        </StyledBadge>
    )
}

Badge.propTypes = {
    children: PropTypes.any,
    show: PropTypes.bool,
    count: PropTypes.number,
    showZero: PropTypes.bool
}

export default Badge

