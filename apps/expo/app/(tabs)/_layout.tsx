import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Link, Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import LogoTitle from 'app/components/LogoTitle'
import { Pressable } from 'app/design/TailwindComponents';
import { ComponentProps } from 'react';
import { FAB } from 'react-native-paper'

import { useAppStore } from 'app/store/store';
import ExpandedIcon from 'app/components/ExpandedIcon';
import CollapsedIcon from 'app/components/CollapsedIcon';

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


const IconEX = () => <ExpandedIcon style={{ marginLeft: -8 }} height={35} width={35} />
const IconCol = () => <CollapsedIcon style={{ marginLeft: -8 }} height={35} width={35} />

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const expand = useAppStore((state) => state.toggleExpansion)
  const isExpanded = useAppStore((state) => state.isExpanded)

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
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: "#0f24cf",
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          //height: 70,
          borderRadius: 15,
          paddingBottom: 5,
          borderTopWidth: 0,
          elevation: 0,
          shadow: {
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 0,
            shadowColor: '#7F5DF0',
            shadowOffset: {
              width: 0,
              height: 10
            },
          }
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
        name="empty"
        options={{
          title: 'Empty',
          tabBarButton: () =>
            <Pressable
              onPress={() => expand()}
              style={{
                marginTop: -14,
                backgroundColor: '#ec562a',
                borderRadius: 10,
                width: 70,
                height: 66,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 10
              }}
            >
              {isExpanded ? <IconCol /> : <IconEX />}
            </Pressable>,
        }}
      />
      < Tabs.Screen
        name="two"
        options={{
          title: 'Spillboard',
          tabBarIcon: ({ color }) => <MatTabBarIcon name="billboard" color={color} />,
        }}
      />
    </Tabs>
  );
}
