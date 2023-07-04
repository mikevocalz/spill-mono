import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'

export function SpillBoardScreen() {
  return (
    <ScreenScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      className="flex-1 bg-black h-screen min-w-screen min-h-screen">

      <H1 className='text-white'>Spillboard</H1>
    </ScreenScrollView>
  )
}
