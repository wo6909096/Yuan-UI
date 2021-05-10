import React from 'react';
import PropTypes from 'prop-types';
import StyledParagraph from './style';
function Paragraph({children, ellipsis = false, ...rest}) {
    return (
        // styled-components组件的 as属性 可以将组件渲染为指定的标签
        <StyledParagraph as='p' ellipsis={ellipsis} {...rest}>{children}</StyledParagraph>
    )
}

Paragraph.propTypes = {
    children: PropTypes.any,
    ellipsis: PropTypes.bool,
    type: PropTypes.oneOf(['primary', "secondary", "danger"]),
    size: PropTypes.oneOf([
        "xxsmall",
        "xsmall",
        "small",
        "normal",
        "medium",
        "large",
        "xlarge",
        "xxlarge"
    ]),
    bold: PropTypes.bool
}

export default Paragraph

