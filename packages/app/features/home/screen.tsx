
import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useMemo, useCallback, useState } from 'react'
import { Animated, Dimensions, Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import { TextInput, View, Image, Text } from 'app/design/TailwindComponents'
import { HomeContainer } from 'app/features/home/container';
import { SpillContainer } from 'app/components/SpillContainer'
import { FAB } from 'react-native-paper'
import { useAppStore } from 'app/store/store'
import ExpandedIcon from 'app/components/ExpandedIcon'
import CollapsedIcon from 'app/components/CollapsedIcon'
import { BottomKeyboardAvoidingView } from 'app/components/BottomKeyboardAvoidingView';


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
  const snapPoints = useMemo(() => ['31%', '55%', '98%'], []);

  // Callback function that gets called when the bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Expands the bottom sheet when our button is pressed
  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  }

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = () => {
    setBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setBottomSheetOpen(false);
  };

  const isMobile = width >= 400
  const isWeb = Platform.OS === 'web'


  return (
    <View
      style={{
        alignSelf: 'center',
        alignItems: 'center'
      }}

      className={`flex-1 w-full  bg-black h-screen min-w-screen min-h-screen  ${isWeb ? 'items-center pb-[400px]' : 'pb-[500px] '
        } `} >


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
          onClose={handleBottomSheetClose}
          //onDismiss={() => handleBottomSheetClose}

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
          <BottomKeyboardAvoidingView
            isOpen={bottomSheetOpen}
          >

            <View
              className='h-screen w-full bg-[#0f24cf] px-4' >
              <View className='items-center flex-row grid grid-rows-2 space-x-3 '>
                <Image
                  className="bg-white md:h-12 md:w-12 h-8 w-8 rounded-full border-[#0b7b0e] border-[1px]"
                  unoptimized
                  contentFit='cover'
                  alt="app image"
                  width={200}
                  height={200}
                  src={'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg'}
                />
                <View className='h-10 w-[85%] bg-black rounded-3xl' />
              </View>
            </View>
          </BottomKeyboardAvoidingView>
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
    </View >
  )
}
