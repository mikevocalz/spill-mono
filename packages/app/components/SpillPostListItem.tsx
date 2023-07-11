import { Article, Image, Text, View, MotiPressable } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"
import SpillPostBody from "./SpillPostBody"
import { AnimatePresence } from "moti"
import { Link } from "solito/link"
import { motify } from 'moti'
import HighlightedHashtags from "app/utils/HighlightHash"
import { Dimensions, Platform } from "react-native"

const MotiArticle = motify(Article)()

const { width } = Dimensions.get('window')
const isWeb = Platform.OS === 'web';

const SpillPostListItem = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  return (
    <>
      <View
        href="/spillboard"
        from={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'timing',
          duration: 600
        }}
        exitTransition={{
          type: 'decay'
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
        }}
        key={props.id}
        className={`overflow-hidden ${isExpanded ? '' : 'py-4  '} ${isWeb ? '' : ''} rounded-3xl shadow-lg justify-center  bg-zinc-900 max-w-4xl mx-2 mb-6`}>

        {!isExpanded && <SpillPostHeader key={props.index} avatar={props.avatar} username={props.username} isSponsored={props.isSponsored} />}

        {isExpanded ?
          <MotiPressable
            href={'/spillboard'}
            key={props.id}
            className={`p-2  ${isWeb ? 'aspect-[4/2.3]' : 'aspect-[4/3.8]'} container overflow-hidden  w-[94vw] height-[100vh] relative max-w-5xl`}>

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
              sizes={width !== undefined ? `${Math.round(width)} px` : '100vw'}

              src={props.imgSrc} />




            <View className="flex w-[85vw]  absolute left-0 bottom-3  left-0 px-[3%] mr-4">
              <HighlightedHashtags index={props.id} text={props.text} />
            </View>
          </MotiPressable> :

          <MotiPressable
            from={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: 'timing',
              duration: 600
            }}
            exitTransition={{
              type: 'decay'
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            className={`mb-0 flex-row justify-between `}>
            <View className={`flex h-full max-h-[600px] mt-3 flex-row items-center  w-full p-4  max-w-5xl min-h-full `}>
              <View className="p-2 aspect-[2/4] rounded-xl container overflow-hidden  w-[30vw] height-[50vh] relative max-w-[15vw]"  >

                <Image alt="Placeholder"
                  unoptimized
                  loading='lazy'
                  className=""
                  fill
                  contentPosition={'top center'}
                  contentFit='cover'
                  placeholder="blur"
                  blurDataURL="|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["
                  sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}
                  src={props.imgSrc} />

              </View>
              <View className={`px-6 w-full justify-center flex-1  `}>
                <HighlightedHashtags index={props.id} text={props.text} />
              </View>
            </View>
          </MotiPressable>

        }
      </View>
      {isExpanded &&
        <SpillPostHeader avatar={props.avatar} username={props.username} isSponsored={props.isSponsored} />}

    </>
  )
}

export default SpillPostListItem



