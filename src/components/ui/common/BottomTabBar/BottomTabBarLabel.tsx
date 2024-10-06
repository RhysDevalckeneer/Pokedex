import React from 'react';
import { Text } from 'react-native';

interface TabBarLabelProps {
    label: string;
    color: any;
    size: number;
}

const TabBarLabel = ({ label, color, size }: TabBarLabelProps) => (
    <Text
        style={{
            color,
            fontSize: size,
            fontWeight: '500',
        }}>
        { label }
    </Text>
);

export default TabBarLabel;
