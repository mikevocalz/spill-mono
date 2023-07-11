import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import { Section, View, Text, Image } from 'app/design/TailwindComponents'
import { motify } from 'moti';
import image from '../../../../apps/expo/assets/images/error404.jpg'
import { Platform, Dimensions } from 'react-native';

const MotiSection = motify(Section)();

const { width } = Dimensions.get('window')

const isWeb = Platform.OS === 'web';

export function NotFound() {
  return (
    <View className="flex-1 bg-black items-center justify-center w-screen min-h-screen pb-[300px]">

      <MotiSection
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 800 }}
        style={{ marginTop: isWeb ? 100 : 0 }}
        className="overflow-hidden rounded-xl shadow-lg mx-2 bg-black">
        <View className="p-2 aspect-[16/12] container w-[100vw] height-[100vh] relative max-w-3xl"  >

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

            src={image} />
        </View>
      </MotiSection>
    </View>
  )
}
