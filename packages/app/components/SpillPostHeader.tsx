import { Article, Text, View, Image, Span } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import CommentBoxSVG from "./CommentBoxSVG"
import QuoteSVG from "./QuoteSVG"
import TeaCupSVG from "./TeaCupSVG"
import { Pressable } from "react-native"
import { fontPixel } from "app/utils/normalize"


const SpillPostHeader = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  function randomizeNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  let isSponored

  return (
    <View className={`flex-1  w-full max-w-5xl px-3`}>
      <View className="flex-row justify-between justify-center items-center">
        <View className="flex flex-row items-center space-x-2">
          <Image
            className="bg-white flex-wrap md:h-12 md:w-12 h-8 w-8 rounded-full border-[#0b7b0e] border-[1px]"
            unoptimized
            priority
            contentFit='cover'
            alt="app image"
            width={200}
            height={200}
            src={props?.avatar}
          />
          <View className="flex-col">
            <Text
              style={{
                fontSize: fontPixel(14)
              }}
              className={`text-white font-bold flex-wrap flex-1`}>
              {props?.username}
            </Text>
            {isSponored &&
              <Text
                style={{
                  fontSize: fontPixel(10)
                }}
                className={`text-white font-bold flex-wrap flex-1`}>
                sponsored
              </Text>
            }
          </View>
        </View>

        <View className=" flex-row items-center space-x-3 absolute right-2">

          <View className="flex-row space-x-1 items-center justify-center">
            <CommentBoxSVG onPress={() => null} fill={'#fff'} width={isExpanded ? 20 : 12} height={isExpanded ? 24 : 20} />
            <Text allowFontScaling style={{ fontSize: fontPixel(16) }}
              className={`text-white `}>{randomizeNumber()}</Text>
          </View>


          <Pressable
            className="flex-1 w-full "
            onPress={() => null}
          >
            <QuoteSVG fill={'#fff'} width={isExpanded ? 24 : 20} height={isExpanded ? 20 : 12} />
          </Pressable>

          <View className="ml-2 flex-row space-x-1 items-center justify-center">
            <TeaCupSVG onPress={() => null} fill={'#fff'} width={isExpanded ? 20 : 12} height={isExpanded ? 24 : 20} />
            <Text allowFontScaling style={{ fontSize: fontPixel(16) }}
              className={`text-white `}>{randomizeNumber()}</Text>
          </View>
        </View>

      </View>
    </View >
  )
}

export default SpillPostHeader