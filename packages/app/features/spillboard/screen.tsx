import { A, H1, } from 'app/design/typography'

import { Button, IconButton } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import HashTagList from 'app/components/HashTagList'
import { Platform, StyleSheet } from 'react-native'
import { FlatList, Text, Pressable, MotiLink, MotiPressable } from 'app/design/TailwindComponents'
import { useWindowDimensions } from 'react-native'


const data = [
  {
    id: 1,
    text: 'data 1'
  },
  {
    id: 2,
    text: 'data 2'
  },
  {
    id: 3,
    text: 'data 3'
  },
  {
    id: 4,
    text: 'data 4'
  },
  {
    id: 5,
    text: 'data 5'
  },
  {
    id: 6,
    text: 'data 6'
  },
  {
    id: 7,
    text: 'data 7'
  },
  {
    id: 8,
    text: 'data 8'
  },
  {
    id: 9,
    text: 'data 9'
  },
  {
    id: 10,
    text: 'data 10'
  },
]
export function SpillBoardScreen() {
  const { width } = useWindowDimensions()
  const SquareItem = ({ item }) => {
    return (
      <MotiPressable
        href={'#'}
        className='m-1 aspect-square bg-red-500 items-center rounded-2xl'
        style={{
          flex: 0.5,
          width: width / 2 - 20,
          height: width / 2
        }}
      >
        <Text style={styles.text}>{item.text}</Text>
      </MotiPressable>
    );
  };

  return (
    <ScreenScrollView
      nestedScrollEnabled
      scrollEnabled={false}
      contentInsetAdjustmentBehavior='automatic'
      style={{

      }}
      contentContainerStyle={{
        alignItems: 'center',

      }}
      className="flex-1 flex-wrap bg-zinc-700 w-full h-screen min-w-screen min-h-screen max-w-7xl">

      <H1 className='text-white text-center'>Spillboard</H1>
      <IconButton icon={'home'} />
      <FlatList
        data={data}
        numColumns={2}
        className='px-3 '
        horizontal={false}

        columnWrapperStyle={{ alignItems: 'flex-start' }}
        renderItem={({ item }) => <SquareItem item={item} />}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{
          //justifyContent: 'center',
          paddingBottom: 300
        }}
      />

      {/* <HashTagList /> */}
    </ScreenScrollView>
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