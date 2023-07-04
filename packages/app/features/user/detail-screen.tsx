import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
ScreenScrollView
const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <ScreenScrollView
      className="flex-1 items-center justify-center bg-zinc-400 w-screen pb-[300px]">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </ScreenScrollView>
  )
}
