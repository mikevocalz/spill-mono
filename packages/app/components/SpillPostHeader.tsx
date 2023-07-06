import { Article, Text, View, Image } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import CommentBoxSVG from "./CommentBoxSVG"
import QuoteSVG from "./QuoteSVG"
import TeaCupSVG from "./TeaCupSVG"
import { Pressable } from "react-native"


const SpillPostHeader = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  return (
    <View className={`flex w-full max-w-5xl my-2`}>
      <View className="flex-row justify-between">
        <View className="flex flex-row items-center space-x-3">
          <Image
            className="bg-white md:h-12 md:w-12 h-9 w-9 rounded-full border-[#0b7b0e] border-[1px]"
            unoptimized
            contentFit='cover'
            alt="app image"
            width={200}
            height={200}
            src={props?.avatar}
          />
          <Text className={`text-white font-bold  ${isExpanded ? 'text-xl' : 'text-[16px]'}`}>
            {props?.username}
          </Text>
        </View>
        <View className="  flex-row items-center space-x-6 mr-2">
          <View className="flex-row space-x-3 items-center justify-center">
            <CommentBoxSVG onPress={() => null} fill={'#fff'} width={isExpanded ? 24 : 20} height={isExpanded ? 24 : 20} />
            <Text className={`text-white ${isExpanded ? 'text-[18px]' : 'text-[14px]'} font-bold`}>1</Text>
          </View>
          <QuoteSVG fill={'#fff'} width={isExpanded ? 24 : 20} height={isExpanded ? 24 : 20} />
          <View className="flex flex-row space-x-3 items-center justify-center">
            <TeaCupSVG onPress={() => null} fill={'#fff'} width={isExpanded ? 24 : 20} height={isExpanded ? 24 : 20} />
            <Text className={`text-white ${isExpanded ? 'text-[18px]' : 'text-[14px]'} font-bold`}>8</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default SpillPostHeader