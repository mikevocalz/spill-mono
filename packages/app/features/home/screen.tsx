import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'

export function HomeScreen() {
  return (
    <ScreenScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className="flex-1 bg-black  w-screen  pb-[300px]">

      <H1 className='text-white'>Home</H1>
    </ScreenScrollView>
  )
}
