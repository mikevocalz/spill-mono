import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const { width, height } = Dimensions.get('screen');

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <PaperProvider>
          {children}
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
