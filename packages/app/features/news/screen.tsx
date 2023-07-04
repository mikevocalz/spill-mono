import { A, H1, P, Text, TextLink, View } from 'app/design/typography'
import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'

export function NewsScreen() {
  return (
    <ScreenScrollView className="flex-1 bg-black items-center justify-center w-screen min-h-screen pb-[300px]">

      <Text className='text-3xl font-bold text-center text-white'>Check back for more info soon
      </Text>
    </ScreenScrollView>
  )
}
