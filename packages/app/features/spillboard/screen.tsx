import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import HashTagList from 'app/components/HashTagList'
import { Platform } from 'react-native'

export function SpillBoardScreen() {
  return (
    <ScreenScrollView
      scrollEnabled={false}
      style={{

      }}
      contentContainerStyle={{
        alignItems: 'center',

      }}
      className="flex-1 bg-zinc-700 w-full  h-screen min-w-screen min-h-screen max-w-7xl">

      <H1 className='text-white text-center'>Spillboard</H1>

      <HashTagList />
    </ScreenScrollView>
  )
}
