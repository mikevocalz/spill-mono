import { Article, Text, View } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"
import SpillPostBody from "./SpillPostBody"
import { AnimatePresence } from "moti"

const SpillPostListItem = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  return (
    <Article
      className={`flex w-full my-6`}>
      <View className={` w-full mb-2 max-w-5xl bg-zinc-800 rounded-3xl overflow-hidden`}>
        <SpillPostBody
          imgSrc={props.imgSrc}
          text={props.text}
          hash={props.hash}
          avatar={props.avatar}
          username={props.username}
        />
      </View>
      {isExpanded && <SpillPostHeader avatar={props.avatar} username={props.username} />}

    </Article >
  )
}

export default SpillPostListItem