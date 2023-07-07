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
    text: 'Its time to Boogie with the Bear #PowerRangerSpill',
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
    <View className='items-center min-h-screen w-screen max-w-4xl  '>


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
        className=' h-full w-screen max-w-4xl px-4'
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'web' ? 400 : 300
        }}
        ListHeaderComponent={() => <View className='h-14' />}
        ItemSeparatorComponent={() => <View className='h-6 md:h-10' />}

        data={data}
        bounces={false}
        scrollEventThrottle={20}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(item: any) => item?.username}
      />

    </View >
  )
}
