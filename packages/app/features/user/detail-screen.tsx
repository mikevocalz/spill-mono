'use client';
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import { Text, View } from 'app/design/TailwindComponents'
import { createParam } from 'solito';
import { useParams, useRouter, useSearchParams } from 'solito/navigation'


const { useParam } = createParam<{ id: string }>()


export function UserDetailScreen() {

  const [id] = useParam('id')
  const router = useRouter()


  return (
    <ScreenScrollView
      className="flex-1 min-h-screen items-center justify-center bg-zinc-400 w-screen pb-[300px]">
      <Text className="mb-4 text-center font-bold" onPress={() => router.back()}>
        {id}, here i am.
      </Text>
    </ScreenScrollView>
  )
}
