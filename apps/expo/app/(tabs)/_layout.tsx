import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs, Link } from 'expo-router';
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
  return <FontAwesome size={28} style={{ marginBottom: 0 }} {...props} />;
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
        tabBarShowLabel: true,

        tabBarLabelStyle: {
          fontFamily: 'SFProDisplay-Bold',
          marginBottom: 14,
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: 2,
          textAlign: 'center',
          textAlignVertical: 'center',
          alignItems: 'center',

        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#0b7b11",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: "#0f24cf",
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 75,
          borderRadius: 20,
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
                marginTop: -9,
                backgroundColor: '#ec562a',
                borderRadius: 55 / 2,
                width: 55,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 8
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
