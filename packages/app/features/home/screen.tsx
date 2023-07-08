
import { MotiLink } from 'solito/moti'
import { Button, IconButton } from 'react-native-paper'
import BottomSheet, { useBottomSheet } from '@gorhom/bottom-sheet';
import { useRef, useMemo, useCallback, useState, useEffect } from 'react'
import { Animated, Dimensions, Platform, KeyboardAvoidingView, Keyboard, TextInput } from 'react-native'
import { View, Image, Text, Pressable } from 'app/design/TailwindComponents'
import { HomeContainer } from 'app/features/home/container';
import { SpillContainer } from 'app/components/SpillContainer'
import { FAB } from 'react-native-paper'
import { useAppStore } from 'app/store/store'
import ExpandedIcon from 'app/components/ExpandedIcon'
import CollapsedIcon from 'app/components/CollapsedIcon'
import { BottomKeyboardAvoidingView } from 'app/components/BottomKeyboardAvoidingView';

import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { MotiImage, MotiView, motify } from 'moti';
import { fontPixel, heightPixel } from 'app/utils/normalize';

const { width, height } = Dimensions.get('screen')
const MotiInput = motify(TextInput)()
const IconEX = <ExpandedIcon style={{ marginLeft: -8 }} height={35} width={35} />
const IconCol = <CollapsedIcon style={{ marginLeft: -8 }} height={35} width={35} />

export function HomeScreen() {
  const isExpanded = useAppStore((state) => state.isExpanded);

  const expand = useAppStore((state) => state.toggleExpansion)

  // Creates a reference to the DOM element that we can interact with
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [visible, setVisble] = useState(true)
  // Setting the points to which we want the bottom sheet to be set to
  // Using '-30' here so that it is not seen when it is not presented
  const snapPoints = useMemo(() => [260, '98%'], []);

  // Callback function that gets called when the bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === 1) {
      setVisble(!visible)
    } else
      setVisble(true)


  }, [visible]);

  // Expands the bottom sheet when our button is pressed
  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  }

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = () => {
    setBottomSheetOpen(true);
    bottomSheetRef?.current?.expand();

  };


  const handleBottomSheetClose = () => {
    setBottomSheetOpen(false);
    bottomSheetRef?.current?.snapToIndex(0)
  };

  const isMobile = width >= 400
  const isWeb = Platform.OS === 'web'

  const [spillText, setSpillText] = useState('');
  const textNum = spillText.length


  return (
    <View
      style={{
        alignSelf: 'center',
        alignItems: 'center',

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


          <View
            className='h-screen w-full bg-[#0f24cf] px-4 items-center' >
            {visible ?
              <View className='w-full flex flex-row space-x-3 items-center '>
                <MotiImage
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 50 / 2
                  }}
                  //className="bg-white md:h-12 md:w-12 h-8 w-8 rounded-full border-[#0b7b0e] border-[1px]"
                  //contentFit='cover'
                  alt="app image"
                  // width={200}
                  // height={200}
                  source={{ uri: 'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg' }}
                />
                <Pressable onPress={handleBottomSheetOpen}
                  className='w-full pr-10'>
                  <View className='w-[98%] h-[40px] bg-black mr-0 rounded-full justify-center '>
                    <Text style={{ fontSize: fontPixel(14) }}
                      className='text-white ml-6 lg:py-2'>What's Ya #SPILL?</Text>
                  </View>
                </Pressable>
              </View>
              :
              <View className='w-full'>
                <View className='flex w-full h-16  items-center justify-between flex-row mb-4'>
                  <Pressable className='px-3  '
                    onPress={handleBottomSheetClose}>
                    <Text style={{
                      fontSize: fontPixel(16)
                    }} className='text-white font-bold'>Cancel</Text>
                  </Pressable>

                  <Pressable
                    onPress={(text) => setSpillText('')}
                    style={{
                      opacity: textNum <= 0 ? .3 : 1
                    }}
                    className="bg-red-400 mt-1 font-bold items-center justify-center rounded-3xl px-6 py-2">
                    <Text style={{
                      fontSize: fontPixel(16)
                    }} className='text-black'>Spill</Text>
                  </Pressable>
                </View>
                <MotiInput
                  from={{
                    opacity: 0,
                    scale: 0.8,
                    height: heightPixel(40)
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    height: heightPixel(280)
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  numberOfLines={3}
                  multiline
                  maxLength={90}
                  selectionColor={'blue'}
                  value={spillText}
                  placeholder="What's Ya #SPILL?"
                  onChangeText={(text) => setSpillText(text)}
                  placeholderTextColor={'grey'}
                  style={[{
                    width: '100%',
                    height: '40%',
                    backgroundColor: 'black',
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    fontSize: fontPixel(28),
                    color: 'lightgray',
                    fontWeight: 'bold'
                  },
                  ]}
                />
              </View>
            }


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
    </View >
  )
}
