import React from 'react';
import { Text } from 'react-native';

interface BottomTabBarLabelProps {
    label: string;
    color: any;
    size: number;
}

const BottomTabBarLabel = ({ label, color, size }: BottomTabBarLabelProps) => (
    <Text
        style={{
            color,
            fontSize: size,
            fontWeight: '500',
        }}>
        { label }
    </Text>
);

export default BottomTabBarLabel;
