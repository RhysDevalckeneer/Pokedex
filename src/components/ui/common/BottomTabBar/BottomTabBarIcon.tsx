import React from 'react';
import Feather from '@expo/vector-icons/Feather';

interface TabBarIconProps {
    iconName: any;
    iconSize: number;
    color: any;
}

const TabBarIcon = ({ color, iconName, iconSize }: TabBarIconProps) => (
    <Feather
        name={iconName}
        size={iconSize}
        color={color}
    />
);

export default TabBarIcon;