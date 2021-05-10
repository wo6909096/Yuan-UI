import React from 'react';
import PropTypes from 'prop-types';
import StyledInput, {InputContainer, Prefix, Suffix} from './style';
import { useTheme } from 'styled-components';

import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
// import Icon from 'components/Icon';
import Icon from "components/Icon";
function Input({plaseholder = '请输入内容...', profix, suffix, ...rest}) {
    return (
        <InputContainer {...rest}>
            {profix && <Prefix>{profix}</Prefix>}
            <StyledInput placeholder={plaseholder}/>
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    )
}

function Search({placeholder = '请输入要搜索的内容...', ...rest}) {
    const theme = useTheme();
    return (
        <Input
            plaseholder={placeholder}
            profix={
                <Icon icon={SearchIcon} width={18} height={18} />
            }
            {...rest}
        />
    )
}

Input.Search = Search;

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
};

export default Input;

