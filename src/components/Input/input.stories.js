import React from 'react';
import Input from '.';
import Icon from "components/Icon";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";

export default {
    title:'UI 组件/Input',
    component: Input
}

export const Default = () => {
    return <Input />
}
export const Search = () => {
    return <Input.Search />
}

export const WithAffix = () => (
    <Input.Search
        prefix={<Icon icon={SearchIcon} color="#cccccc" />}
        suffix={<Icon icon={SmileIcon} color="#cccccc" />}
    />
);