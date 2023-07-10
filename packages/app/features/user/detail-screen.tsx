'use client';
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import { Text, View } from 'app/design/TailwindComponents'
import { Platform } from 'react-native';
import { createParam } from 'solito';
import { useParams, useRouter, useSearchParams } from 'solito/navigation'
import { Stack } from 'expo-router'

const { useParam } = createParam<{ id: string }>()

const isWeb = Platform.OS === 'web'

export function UserDetailScreen() {

  const [id] = useParam('id')
  const router = useRouter()

  return (

    <ScreenScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className="flex-1 min-h-screen w-full  bg-zinc-400 min-w-screen pb-[300px] max-w-7xl">
      <Text className="mb-4 text-center font-bold" onPress={() => router.back()}>
        {id}, here i am.
      </Text>
    </ScreenScrollView>

  )
}
