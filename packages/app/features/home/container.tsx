import { View, Text, FlatList } from 'app/design/TailwindComponents'
import { FC, useState } from 'react'
import { Avatar, List } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions, ListRenderItemInfo, Platform, } from 'react-native';
import SpillPostListItem from 'app/components/SpillPostListItem';
import { useAppStore } from "app/store/store"


const { width, height } = Dimensions.get('screen');

const data = [
  {
    text: 'Whats Goin on Fam? Whats ya #MarvelSpill ?',
    img: 'https://i.ytimg.com/vi/CqcNbhY9ltA/maxresdefault.jpg',
    hash: '#MarvelSpill ?',
    avatar: 'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg',
    username: 'ZaddyBishop'
  },
  {
    text: 'Ladies i think The queen needs a 🎥 #DCSpill',
    img: 'https://hips.hearstapps.com/hmg-prod/images/nubia-1601912242.jpg',
    hash: '#DCSpill',
    avatar: 'https://cdn.mos.cms.futurecdn.net/w4JpnGpTMdM3p7GcNcxUZD.jpg',
    username: 'MsSormzyWeatha'

  },
  {
    text: 'When lightnin srikes ⚡ #DCSpill ⚡. Yall misss Black Lightnin?',
    img: 'https://akns-images.eonline.com/eol_images/Entire_Site/20201020/rs_1200x1200-201120115519-1200-Cress-Williams-Black-Lightning-LT-112020-CW.jpg',
    hash: '#DCSpill',
    avatar: 'https://tvline.com/wp-content/uploads/2021/01/black-lightning-final-season-trailer.png',
    userName: 'MrPierce'
  },
  {
    text: 'This Zack dont Crack!! #PowerRangersSpill',
    img: 'https://i.ytimg.com/vi/D6SMZnD8hYs/maxresdefault.jpg',
    hash: '#PRSpill',
    avatar: 'https://static.wikia.nocookie.net/powerrangers/images/5/52/ZackS2.png',
    userName: 'KingZack'
  },
  {
    text: 'Its time to Boogie with the Bear #PowerRangersSpill',
    img: 'https://i.ytimg.com/vi/APIFOoaNXpw/maxresdefault.jpg',
    hash: '#PowerRangerSpill',
    avatar: 'https://assets2.ignimgs.com/2016/10/31/supergirl-tv-miss-martian-revealjpg-f48300_160w.jpg',
    username: 'HeatherMsHuntress'
  }

]
export const HomeContainer: FC = () => {
  const expand = useAppStore((state) => state.toggleExpansion)

  const renderItem = ({ item, idx }: any) => (
    <SpillPostListItem
      key={idx}
      imgSrc={item?.img}
      text={item?.text}
      hash={item?.hash}
      avatar={item?.avatar}
      username={item?.username}
    />
  );

  return (
    <View

      className='items-center min-h-screen w-screen max-w-4xl  '>
      <View style={{ zIndex: -1000 }} className=" w-full fixed  bg-black h-[100px]" />


      {/* {
        data.map((item, idx) => {
          return (
            <SpillPostListItem
              key={idx}
              imgSrc={item?.img}
              text={item?.text}
              hash={item?.hash}
              avatar={item?.avatar}
              username={item?.username}
            />
          )
        })
      } */}


      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          zIndex: -1000,

        }}
        className=' w-screen max-w-4xl px-4 '
        contentContainerStyle={{
          paddingTop: Platform.OS === 'web' ? 200 : 0,
          zIndex: 1000,
          paddingBottom: Platform.OS === 'web' ? 400 : 300
        }}
        ListHeaderComponent={() => <View className='h-14' />}
        ItemSeparatorComponent={() => <View className='h-6 md:h-[400px]' />}

        data={data}
        bounces={false}
        scrollEventThrottle={20}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(item: any) => item?.username}
      />

    </View >
  )
}
