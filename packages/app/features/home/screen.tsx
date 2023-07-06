import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useMemo, useCallback } from 'react'
import { Dimensions, Platform } from 'react-native'
import { TextInput, } from 'app/design/TailwindComponents'
import { Container, HomeContainer } from 'app/features/home/container';
import { SpillContainer } from 'app/components/SpillContainer'
import { FAB } from 'react-native-paper'
import { useAppStore } from 'app/store/store'
import ExpandedIcon from 'app/components/ExpandedIcon'
import CollapsedIcon from 'app/components/CollapsedIcon'



const { width, height } = Dimensions.get('screen')

const IconEX = <ExpandedIcon style={{ marginLeft: -8 }} height={35} width={35} />
const IconCol = <CollapsedIcon style={{ marginLeft: -8 }} height={35} width={35} />

export function HomeScreen() {
  const isExpanded = useAppStore((state) => state.isExpanded);

  const expand = useAppStore((state) => state.toggleExpansion)

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

  const isMobile = width >= 400

  return (
    <ScreenScrollView
      contentContainerStyle={{
        alignItems: 'center',
        alignContent: 'center',
      }}
      className="flex-1 w-full items-center bg-black h-screen min-w-screen min-h-screen px-4 pb-[400px] " >


      {Platform.OS === 'web' && <SpillContainer />}

      < HomeContainer />
      {
        Platform.OS !== 'web' &&
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

      {
        Platform.OS === 'web' &&
        <FAB
          icon={() => isExpanded ? IconCol : IconEX}
          onPress={() => expand()}
          mode='elevated'
          style={{
            borderRadius: 12,
            height: 50,
            width: 50,
            zIndex: 1000,
            justifyContent: 'center',
            backgroundColor: '#ec562a',
            right: '6%',
            bottom: 30,
            position: 'fixed',
            display: 'flex'
          }}
        />
      }
    </ScreenScrollView >
  )
}
