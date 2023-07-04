import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Link, Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import LogoTitle from 'app/components/LogoTitle'
import { Pressable } from 'app/design/TailwindComponents';
import { ComponentProps } from 'react';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function MatTabBarIcon(props: {
  name: ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#efcf37',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontFamily: 'SFPro',
          fontSize: 16,
          textTransform: 'uppercase',
          marginBottom: -2,
          letterSpacing: 2,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#0b7b11",
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: "#0f24cf",
        },
        headerTitle: () => <LogoTitle height={50} width={100} fill={'#fff'} />,
        headerLeft: () => (
          <Link href="/search" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="search"
                  size={22}
                  color={'white'}
                  style={{ marginLeft: 20, marginBottom: 4, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        headerRight: () => (
          <Link href="/notifications" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="bell"
                  size={22}
                  color={'white'}
                  style={{ marginRight: 20, marginBottom: 4, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name='empty'
        options={{
          tabBarButton: () =>
            <Pressable
              className='h-70 w-70'
            >
              <TabBarIcon size={65} name='add-circle' color={'#00a16e'} />
            </Pressable>,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Spillboard',
          tabBarIcon: ({ color }) => <MatTabBarIcon name="billboard" color={color} />,
        }}
      />
    </Tabs>
  );
}
