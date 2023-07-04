import { A, H1, P, Text, TextLink, View } from 'app/design/typography'
import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'

export function CareersScreen() {
  return (
    <ScreenScrollView className="flex-1 bg-black min-h-screen items-center justify-center w-screen  pb-[300px]">

      <Text className='text-3xl font-bold text-white text-center'>Check back for more opportunities soon</Text>
    </ScreenScrollView>
  )
}
