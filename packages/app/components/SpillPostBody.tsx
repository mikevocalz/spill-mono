import { Article, Text, View, Image, Span, MotiPressable, } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"
import HighlightedHashtags from "app/utils/HighlightHash"
import { MotiLink } from "solito/moti"
import { useRouter } from "solito/navigation"

import { Link } from 'solito/link'
import { Dimensions, Platform } from "react-native"
import { fontPixel } from "app/utils/normalize"
import { MotiView } from "moti"


const { width } = Dimensions.get('window')

const isWeb = Platform.OS === 'web';

const SpillPostBody = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)
  const { push } = useRouter()


  const onPress = (item) => {


    let id = 'Bishop'

    push(`/user/${id}`)
  }

  return (
    <>
      {/* {!isExpanded &&
        <View className="px-4 mt-3">
          <SpillPostHeader avatar={props.avatar} username={props.username} />
        </View>
      } */}

      <View
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 800 }}
        className="overflow-hidden rounded-xl shadow-lg mx-2 bg-zinc-900">


        <View className="p-2 aspect-[4/3] container overflow-hidden  w-[100vw] height-[100vh] relative max-w-5xl"  >

          <Image alt="Placeholder"
            unoptimized
            loading='lazy'
            className=""
            fill
            contentPosition={'top center'}
            contentFit='cover'
            placeholder="blur"
            blurDataURL="|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["
            // sizes="(min-width: 100vw) 100vh"
            sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}

            src={props.imgSrc} />




          <View className="absolute left-0 bottom-3  left-0 px-[3%] mr-4">
            <HighlightedHashtags text={props.text} />
          </View>
        </View>


      </View>



    </>
  )
}

export default SpillPostBody


//   < View className = {`${isExpanded ? 'mb-0' : 'mb-8'} flex-row justify-between  `}>
//     <View className={`flex-1 aspect-4/3 h-full max-h-[600px]  w-screen ${isExpanded ? 'flex-col' : 'flex-row px-4'}  max-w-5xl min-h-full  h-full`}>
//       <Image className={` flex-1 ${isExpanded ? 'w-full  min-h-[300px]' : 'w-full max-w-[25%] my-4 h-auto max-h-[140px] '}  aspect-4/3`}
//         unoptimized
//         contentPosition={'top center'}
//         alt="image 1"
//         contentFit='cover'
//         width={300}
//         height={300}
//         style={{
//           borderRadius: 12
//         }}
//         src={props.imgSrc}
//       />
//       <View className={`${isExpanded ? 'absolute bottom-7 left-7 max-w-full md:pr-[20%] pr-[15%]' : 'top-0 left-0 px-6 w-full justify-center flex-1 '}  `}>
//         <HighlightedHashtags text={props.text} />

//       </View>
//     </View>

// </View>