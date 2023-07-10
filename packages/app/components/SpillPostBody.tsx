import { Article, Text, View, Image, Span } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"
import HighlightedHashtags from "app/utils/HighlightHash"
import { MotiLink } from "solito/moti"
import { useRouter } from "solito/navigation"

import { Link } from 'solito/link'

const SpillPostBody = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)
  const { push } = useRouter()


  const onPress = (item) => {


    let id = 'Bishop'

    push(`/user/${id}`)
  }

  return (
    <Link href="/user/bishop">
      {!isExpanded &&
        <View className="px-4 mt-1">
          <SpillPostHeader avatar={props.avatar} username={props.username} />
        </View>
      }

      <View className={`${isExpanded ? 'mb-0' : 'mb-8'} flex-row justify-between  `}>
        <View className={`flex-1 aspect-4/3 h-full max-h-[600px]  w-screen ${isExpanded ? 'flex-col' : 'flex-row px-4'}  max-w-5xl min-h-full  h-full`}>
          <Image className={` flex-1 ${isExpanded ? 'w-full  min-h-[300px]' : 'w-full max-w-[25%] my-4 h-auto max-h-[140px] '}  aspect-4/3`}
            unoptimized
            contentPosition={'top center'}
            alt="image 1"
            contentFit='cover'
            width={300}
            height={300}
            style={{
              borderRadius: 12
            }}
            src={props.imgSrc}
          />
          <View className={`${isExpanded ? 'absolute bottom-7 left-7 max-w-full md:pr-[20%] pr-[15%]' : 'top-0 left-0 px-6 w-full justify-center flex-1 '}  `}>
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