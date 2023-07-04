import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useRouter } from 'solito/navigation'
import { Link } from 'solito/link'
import { Pressable } from 'app/design/TailwindComponents';

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
    SFPro: require('../assets/fonts/SFProDisplay-Bold.ttf'),
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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { back } = useRouter()
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
            fontFamily: 'SFPro',
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
              fontFamily: 'SFPro',
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
      </Stack>
    </ThemeProvider>
  );
}
