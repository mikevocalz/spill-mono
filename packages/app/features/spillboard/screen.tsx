import { H1, } from 'app/design/typography'

import { Button, IconButton } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import HashTagList from 'app/components/HashTagList'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { FlatList, Text, Pressable, Image, MotiLink, MotiPressable, View, Article, Footer, Header, Span } from 'app/design/TailwindComponents'
import { useWindowDimensions } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from 'app/utils/normalize'
import HighlightedHashtags from 'app/utils/HighlightHash'


const data = [
  {
    id: 1,
    text: 'Black Men start normalizing therapy and Self Care!',
    img: 'https://assets.rbl.ms/24470158/origin.jpg'
  },
  {
    id: 2,
    text: 'I love being around people who let me be quite 😊',
    img: 'https://media0.giphy.com/media/3og0ILz1oLrgFRuzny/giphy.gif?cid=ecf05e47aicc7lupbs6hv7c16elhwn5chb3vsqj1gihv15k0&ep=v1_gifs_search&rid=giphy.gif'
  },
  {
    id: 3,
    text: 'If you could be a song on #Renaissance, what wound it be?',
    img: 'https://media3.giphy.com/media/rqrgqNKCls4Ugcz52S/giphy.webp',
  },
  {
    id: 4,
    text: 'FORBES just dropped a dope article w/gems on #Spill',
    img: 'https://cdn.sanity.io/images/f8rlzpzw/production/e235fca4b477e095528f0ce839dc3039e97eb616-1080x1080.png',
  },
  {
    id: 5,
    text: 'I wish PPL understood dont nothing gotta be WRONG with ME. Sometimes i dont wanna talk',
    img: 'https://w0.peakpx.com/wallpaper/273/236/HD-wallpaper-black-dark-gray-gray.jpg'
  },
  {
    id: 6,
    text: 'Normailze cutting ties and edning relationships with toxic family & friends',
    img: 'https://media.tenor.com/pGdSj_LsC90AAAAC/bye-girl-slam-door.gif'
  },
  {
    id: 7,
    text: '#JamieFoxx waves to fans on boat in his first sighting since hospitalization',
    img: 'https://imagez.tmz.com/image/9f/16by9/2023/07/09/9f4ace74ac3a4bcaa01b636c2bbc9e71_md.png',
  },
  {
    id: 8,
    text: 'daily affirmation: You a paper chaser, You got block on fire, You remaining a G',
    img: 'https://media3.giphy.com/media/TgUuYxPAPT6msbCpPH/200w.gif'
  },
  {
    id: 9,
    text: 'affirmation: I will not lack, I will not worry, I will have faith, and I will do the work.',
    img: 'https://media2.giphy.com/media/jrn7VsmJ6D8bK/giphy.gif'
  },
  {
    id: 10,
    text: 'This can\'t be the same world Ariel was trying to be apart of...',
    img: 'https://media2.giphy.com/media/6rYm3u79TlwOFtEWWh/200w.webp'
  },
]

const { width } = Dimensions.get('window')

const isWeb = Platform.OS === 'web';

export function SpillBoardScreen() {
  const { width } = useWindowDimensions();

  const SquareItem = ({ item }) => {

    return (
      // <MotiPressable
      //   href={'#'}
      //   className='m-1  h-auto aspect-square bg-red-500 items-center justify-center rounded-2xl'
      //   style={{
      //     flexGrow: .5,
      //     width: widthPixel(width / 2),
      //     height: heightPixel(width / 2),
      //   }}
      // >
      //   <Text className='text-white font-bold text-center Text-8'>{item.text}</Text>
      // </MotiPressable>



      <Article className="overflow-hidden rounded-xl shadow-lg mx-2 bg-zinc-900">
        <View className="p-2 aspect-[4/4] container w-[46vw] height-[46vh] relative max-w-md"  >

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

            src={item.img} />

          <View className="flex-row items-center  justify-between  ">
            <View className='h-6' />
            <View className='bg-[#efcf37] justify-center rounded-full p-[3%] aspect-square '>
              <Text
                style={{
                  fontSize: isWeb ? fontPixel(14) : fontPixel(10)
                }}
                className="text-black font-bold ">
                #{item.id}
              </Text>
            </View>
          </View>



          <View className="absolute left-0 bottom-3  left-0 px-[3%] mr-4">
            <HighlightedHashtags text={item.text} />
          </View>
        </View>
      </Article >
    );
  };

  return (
    <View


      className="flex-1 items-center  mx-auto container  w-full h-screen min-w-screen min-h-screen max-w-7xl">


      <FlatList
        data={data}
        numColumns={2}
        className=''
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        centerContent={true}
        ItemSeparatorComponent={() => <View className='h-6' />}
        ListHeaderComponent={() => <H1 className='text-white text-center'>#Spillboard</H1>}
        bounces={false}
        scrollEventThrottle={20}
        columnWrapperStyle={{ alignItems: 'flex-start' }}
        renderItem={({ item }) => <SquareItem item={item} />}
        keyExtractor={(item: any) => item.id.toString()}
        ListHeaderComponentStyle={{
          paddingVertical: Platform.OS === 'web' ? 30 : 15,
          marginBottom: Platform.OS === 'web' ? 40 : 10
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          paddingBottom: 300
        }}
      />

      {/* <HashTagList /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  square: {
    flexGrow: 1,
    aspectRatio: 1,
    width: '45%',
    height: 'auto',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
});