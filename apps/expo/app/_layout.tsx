// import at the very top of everything.
import '../ignoreWarnings'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { View, useColorScheme } from 'react-native';
import { useRouter } from 'solito/navigation'
import { Pressable, ScrollView, Text } from 'app/design/TailwindComponents';
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    SFProDisplay: require('../assets/fonts/SFProDisplay.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider>
      <StatusBar animated style='light' />
      <RootLayoutNav />
    </Provider>
  )

}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { back } = useRouter();


  const router = useSearchParams()


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{
          presentation: 'fullScreenModal',
          animation: 'fade',
          headerStyle: {
            backgroundColor: "#efcf37",
          },
          headerTitleStyle: {
            fontFamily: 'SFProDisplay',
            fontWeight: 'bold',
            fontSize: 26,
          },
          headerLeft: () => (
            <Pressable onPress={back}>
              {({ pressed }) => (
                <FontAwesome
                  name='close'
                  size={26}
                  color={'white'}
                  style={{ marginLeft: 10, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }} />
        <Stack.Screen name="notifications"

          options={{
            presentation: 'fullScreenModal',
            animation: 'fade',
            headerStyle: {
              backgroundColor: "#ec562a",
            },
            headerTitleStyle: {
              fontFamily: 'SFProDisplay',
              fontWeight: 'bold',
              fontSize: 26,
            },
            headerLeft: () => (
              <Pressable onPress={back}>
                {({ pressed }) => (
                  <FontAwesome
                    name='close'
                    size={26}
                    color={'white'}
                    style={{ marginLeft: 10, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            ),
          }} />

        <Stack.Screen
          name="user/[id]"

          options={({ route }: { route: any }) => ({
            title: route.params.id,

            presentation: 'fullScreenModal',
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTitleStyle: {
              fontFamily: 'SFProDisplay',
              fontWeight: 'bold',
              fontSize: 18,

            },
            headerLeft: () => {
              return (
                <Pressable onPress={back}>
                  {({ pressed }) => (
                    <FontAwesome
                      name='chevron-left'
                      size={26}
                      color={'white'}
                      style={{ marginLeft: 10, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>

              )
            },


          })}

        />

      </Stack>
    </ThemeProvider>
  );
}
