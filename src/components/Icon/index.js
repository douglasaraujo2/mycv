import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as SimpleIcons from 'react-icons/si';

import { Icon } from './styles';

const createIconElement = (iconLib, iconName) => {
    let icon = '';
    switch (iconLib) {
        case 'FontAwesome':
            icon = React.createElement(FontAwesome[iconName]);
            break;
        case 'BsIcons':
            icon = React.createElement(BsIcons[iconName]);
            break;
        case 'SimpleIcons':
            icon = React.createElement(SimpleIcons[iconName]);
            break;
        default:
            break;
    }
    return icon;
}

const IconLib = ({ iconLib, iconName, size = 16, color = "#009688"}) => {
    const iconElement = createIconElement(iconLib, iconName);
    return (
        <Icon color={color} size={size}>
            {iconElement}
        </Icon>
    );
}

export default IconLib;