import { View, ScrollView } from 'app/design/TailwindComponents'
import { ComponentProps } from 'react'
import { Platform } from 'react-native'


type Props = ComponentProps<typeof ScrollView> & {
  useWindowScrolling?: boolean
}

export function ScreenScrollView({
  useWindowScrolling = true, // defaults to true
  ...props
}: Props) {
  const Component = Platform.select({
    web: useWindowScrolling ? (View as typeof ScrollView) : ScrollView,
    default: ScrollView,
  })

  return <Component {...props} />
}