import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        {children}
      </PaperProvider>
    </GestureHandlerRootView>
  )
}
