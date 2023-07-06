import { Article, Text, View, Image, Span } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"
import HighlightedHashtags from "app/utils/HighlightHash"
import { Link } from "solito/link"


const SpillPostBody = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  return (
    <Link href={'#'} className={`flex-1 w-full max-w-5xl`}>
      {!isExpanded &&
        <View className="px-4 mt-1">
          <SpillPostHeader avatar={props.avatar} username={props.username} />
        </View>
      }

      <View className={`${isExpanded ? 'mb-0' : 'mb-8'} flex-row justify-between   `}>
        <View className={`flex-1 h-full  w-screen ${isExpanded ? 'flex-col' : 'flex-row px-4'}  max-w-5xl min-h-[80px]  h-full`}>
          <Image className={`${isExpanded ? 'w-full  min-h-[500px]' : 'w-full max-w-[25%] my-4 h-auto max-h-[140px] '} `}
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
          <View className={`${isExpanded ? 'absolute bottom-7 left-7 max-w-full' : 'top-0 left-0 px-6 w-full justify-center flex-1 '}  w-3/4`}>
            <HighlightedHashtags text={props.text} />
            {/* <Text lineBreakMode='middle'
              numberOfLines={4} className={` pr-3 text-left tracking-[2px] text-white ${isExpanded ? 'font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl' : 'font-normal text-xl'}  `}>
              {props.text} <Span className="drop-shadow-2xl text-[#efcf37]">{props.hash}</Span>
            </Text> */}
          </View>
        </View>


      </View>
    </Link>
  )
}

export default SpillPostBody