import { Article, Text, View, Image, Span } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"


const SpillPostBody = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  return (
    <View className={`flex w-full max-w-5xl`}>
      {!isExpanded &&
        <View className="px-4 mt-1">
          <SpillPostHeader avatar={props.avatar} username={props.username} />
        </View>
      }

      <View className={`${isExpanded ? 'mb-0' : 'mb-8'} flex-row justify-between`}>
        <View className={`flex-1 w-screen ${isExpanded ? 'flex-col' : 'flex-row px-4'}  max-w-5xl min-h-[80px]  h-full`}>
          <Image className={`${isExpanded ? 'w-full ' : 'w-1/4 my-4'} h-full max-w-5xl`}
            unoptimized
            alt="image 1"
            contentFit='cover'
            width={300}
            height={300}
            style={{
              borderRadius: 12
            }}
            src={props.imgSrc}
          />
          <View className={`${isExpanded ? 'absolute bottom-7 left-7 max-w-3xl' : 'top-0 left-7 w-full justify-center flex-1 '} `}>
            <Text lineBreakMode='middle'
              numberOfLines={4} className={` pr-3 text-left tracking-[2px] text-white ${isExpanded ? 'font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl' : 'font-normal text-xl'}  `}>
              {props.text} <Span className="drop-shadow-2xl text-[#efcf37]">{props.hash}</Span>
            </Text>
          </View>
        </View>


      </View>
    </View >
  )
}

export default SpillPostBody