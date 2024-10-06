import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

import { TabBarIcon, TabBarLabel } from '@components/index';
import { backgroundColors, textColor } from '@theme/colors';

export default function TabLayout() {
  return (
    <Tabs 
        screenOptions={{ 
            tabBarActiveTintColor: backgroundColors.psychic,
            tabBarInactiveTintColor: '#17171B35',
            tabBarStyle: { 
                height: 70,
                elevation: 0,
                borderTopWidth: 0,
                paddingBottom: 12,
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            },
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 500 },
          tabBarIcon: ({ color }) => <TabBarIcon iconName="home" iconSize={26} color={color}/>,
          tabBarIconStyle: { marginBottom: -8 },
          tabBarLabel: ({ color }) => <TabBarLabel label="Home" color={color} size={12}/>,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon iconName="search" iconSize={26} color={color}/>,
          tabBarIconStyle: { marginBottom: -8 },
          tabBarLabel: ({ color }) => <TabBarLabel label="Search" color={color} size={12}/>,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon iconName="grid" iconSize={26} color={color}/>,
          tabBarIconStyle: { marginBottom: -8 },
          tabBarLabel: ({ color }) => <TabBarLabel label="List" color={color} size={12}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="setting" size={26} color={color} />,
          tabBarIconStyle: { marginBottom: -8 },
          tabBarLabel: ({ color }) => <TabBarLabel label="Settings" color={color} size={12}/>,
        }}
      />
    </Tabs>
  );
}
