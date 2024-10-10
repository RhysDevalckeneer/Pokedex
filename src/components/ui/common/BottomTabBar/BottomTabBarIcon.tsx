import React from 'react';
import Feather from '@expo/vector-icons/Feather';

interface BottomTabBarIconProps {
    iconName: any;
    iconSize: number;
    color: any;
}

const BottomTabBarIcon = ({ color, iconName, iconSize }: BottomTabBarIconProps) => (
    <Feather
        name={iconName}
        size={iconSize}
        color={color}
    />
);

export default BottomTabBarIcon;