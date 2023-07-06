import { TextInput as RNTextIn, Dimensions, Text } from "react-native"
import { styled } from "nativewind"
import { FC, useEffect, useState } from "react"
import { View, Image, Pressable } from "app/design/TailwindComponents";

const TextInput = styled(RNTextIn);

const { width } = Dimensions.get('screen')
const isMobile = width >= 400

export const SpillContainer: FC = () => {
  const [spillText, setSpillText] = useState('');
  const textNum = spillText.length

  let hasChar

  return (
    <View className={` lg:visible object-center rounded-3xl px-4 items-center mt-6 mb-10  w-full max-w-[850px] bg-[#0f24cf] ${isMobile ? 'p-2' : 'p-4'}   flex-col `}>
      <View className="w-full flex-row justify-center space-x-2 max-w-4xl ">
        <Image
          className="bg-white md:h-12 md:w-12 h-9 w-9 rounded-full border-[#0b7b0e] border-[1px]"
          unoptimized
          contentFit='cover'
          alt="app image"
          width={200}
          height={200}
          src={'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg'}
        />
        <View className="flex-1 outline-none w-full max-w-[750px] bg-black text-white pb-9  rounded-3xl">
          <TextInput
            onChangeText={(text) => setSpillText(text)}
            className="w-full text-lg  mb-3 max-w-[750px] bg-black text-white p-4 rounded-3xl focus:outline-none"
            numberOfLines={3}
            multiline
            maxLength={90}
            selectionColor={'blue'}
            value={spillText}
            placeholder="What's Ya #SPILL?"
          />
          <View className="bg-black text-white  absolute  bottom-3 right-3 h-6 items-center justify-center py-2 px-3 rounded-xl">
            <Text style={{ color: 'white' }} className='text-white font-normal text-md '>{textNum}/90</Text>
          </View>
        </View>
      </View>
      <View className={`flex-1 self-end pt-1  flex-col  ${isMobile ? 'ml-[10px]' : 'mr-0'} `}>
        <Pressable
          onPress={(text) => setSpillText('')}
          style={{
            opacity: textNum <= 0 ? .3 : 1
          }}
          className="bg-red-400 mt-1  font-bold items-center justify-center rounded-3xl px-6 py-2">
          Spill
        </Pressable>
      </View>

    </View>
  )
}