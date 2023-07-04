import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useMemo, useCallback } from 'react'
import { Dimensions, Platform } from 'react-native'
import { TextInput } from 'app/design/TailwindComponents'

const { width, height } = Dimensions.get('screen')
export function HomeScreen() {
  // Creates a reference to the DOM element that we can interact with
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Setting the points to which we want the bottom sheet to be set to
  // Using '-30' here so that it is not seen when it is not presented
  const snapPoints = useMemo(() => ['30%', '55%', '98%'], []);

  // Callback function that gets called when the bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Expands the bottom sheet when our button is pressed
  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  }
  return (
    <ScreenScrollView
      contentContainerStyle={{
        alignItems: 'center',

      }}
      className="flex-1 bg-black h-screen min-w-screen min-h-screen">

      <H1 className='text-white'>Home</H1>
      {Platform.OS !== 'web' &&
        <BottomSheet
          ref={bottomSheetRef}
          index={0} // Hide the bottom sheet when we first load our component 
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          //enablePanDownToClose
          handleStyle={{
            backgroundColor: '#0f24cf',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
          }}
          containerStyle={{
            alignSelf: 'center',
            height: height,

          }}
          style={{
            alignSelf: 'center',
            zIndex: -700,
            width: '100%',

          }}
        >
          <View className='h-screen w-full bg-[#0f24cf] px-4' >
            <View className='items-center flex-row grid grid-rows-2 space-x-3 '>
              <View className='h-10 w-10 bg-red-600 rounded-full' />
              <View className='h-10 w-[85%] bg-black rounded-3xl' />
            </View>
          </View>
        </BottomSheet>
      }
    </ScreenScrollView >
  )
}
