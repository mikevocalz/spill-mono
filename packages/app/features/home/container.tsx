import { View, Text, FlatList } from 'app/design/TailwindComponents'
import { FC, useState } from 'react'
import { Avatar, List } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions, ListRenderItemInfo, Platform, } from 'react-native';
import SpillPostListItem from 'app/components/SpillPostListItem';
import { useAppStore } from "app/store/store"
import { useRouter, } from 'solito/router'
import { heightPixel } from 'app/utils/normalize';


const { width, height } = Dimensions.get('screen');

interface Data {
  id: number,
  text: string,
  img: string,
  hash: string,
  avatar: string,
  username: string
}


const data: Data[] = [
  {
    id: 1,
    text: 'Me 1st downloading #Spill and seeing my people ✊🏿',
    img: 'https://media1.giphy.com/media/l3mZslQwX1rJjOZZ6/giphy.gif',
    hash: '#MarvelSpill',
    avatar: 'https://www.comicbasics.com/wp-content/uploads/2023/02/Shuri-Black-Panther-Wakanda-Forever-1.jpg',
    username: 'MrPierce'
  },

  {
    id: 2,
    text: 'Ladies i think the queen needs a 🎥 #DCSpill',
    img: 'https://hips.hearstapps.com/hmg-prod/images/nubia-1601912242.jpg',
    hash: '#DCSpill',
    avatar: 'https://cdn.mos.cms.futurecdn.net/w4JpnGpTMdM3p7GcNcxUZD.jpg',
    username: 'MsSormzyWeatha'
  },
  {
    id: 3,
    text: 'When lightnin srikes ⚡ #DCSpill ⚡. Yall misss Black Lightnin?',
    img: 'https://media.tenor.com/6Vsb0hXEmRIAAAAd/electric-blast-cress-williams.gif',
    hash: '#DCSpill',
    avatar: 'https://tvline.com/wp-content/uploads/2021/01/black-lightning-final-season-trailer.png',
    username: 'MrPierce'
  },
  {
    id: 4,
    text: 'This Zack dont Crack!! #PowerRangersSpill',
    img: 'https://i.ytimg.com/vi/D6SMZnD8hYs/maxresdefault.jpg',
    hash: '#PRSpill',
    avatar: 'https://static.wikia.nocookie.net/powerrangers/images/5/52/ZackS2.png',
    username: 'KingZack'
  },
  {
    id: 5,
    text: 'Its time to Boogie with the Bear #PowerRangersSpill',
    img: 'https://i.ytimg.com/vi/APIFOoaNXpw/maxresdefault.jpg',
    hash: '#PowerRangerSpill',
    avatar: 'https://assets2.ignimgs.com/2016/10/31/supergirl-tv-miss-martian-revealjpg-f48300_160w.jpg',
    username: 'HeatherMsHuntress'
  },
  {
    id: 6,
    text: 'Me leaving #Twitter but....whats Goin on Fam? Whats ya #MarvelSpill ?',
    img: 'https://64.media.tumblr.com/0c1302bd46a7525d2edd239808472c8b/tumblr_n66ze6xLbW1rjwy92o3_500.gifv',
    hash: '#MarvelSpill ?',
    avatar: 'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg',
    username: 'ZaddyBishop'
  },
]


export const HomeContainer: FC = () => {
  const expand = useAppStore((state) => state.toggleExpansion)

  const { push } = useRouter()


  const onPress = (item) => {

    let id = 'beishop'

    push({
      pathname: `/user/${id}`,
      query: {

      }
    })
  }


  const renderItem = ({ item, idx }) => {
    return (
      <SpillPostListItem
        key={idx}
        onPress={onPress}
        imgSrc={item?.img}
        text={item?.text}
        hash={item?.hash}
        avatar={item?.avatar}
        username={item?.username}
      />
    )
  };

  return (
    <View

      className='items-center min-h-screen w-screen max-w-4xl  '>
      {Platform.OS === 'web' && <View style={{ zIndex: -1000 }} className=" w-full fixed  mx-[60px] bg-black h-[100px]" />}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          zIndex: -1000,

        }}
        className=' min-w-screen max-w-4xl px-2 min-h-screen'
        contentContainerStyle={{
          paddingTop: Platform.OS === 'web' ? 200 : 0,
          zIndex: 1000,
          paddingBottom: Platform.OS === 'web' ? 400 : 300
        }}
        ListHeaderComponent={() => <View className='h-14' />}
        ItemSeparatorComponent={() => <View style={{ height: heightPixel(60) }} />}

        data={data}
        bounces={false}
        scrollEventThrottle={20}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(index: any) => index.toString()}
      />

    </View >
  )
}
