import { Article, Text, View } from "app/design/TailwindComponents"
import { useAppStore } from "app/store/store"
import SpillPostHeader from "./SpillPostHeader"
import SpillPostBody from "./SpillPostBody"
import { AnimatePresence } from "moti"
import { Link } from "solito/link"

const SpillPostListItem = (props) => {
  const isExpanded = useAppStore((state) => state.isExpanded)

  return (
    <Article
      className={`flex-1 flex w-full  mb-2 max-w-5xl ${isExpanded ? 'transparent' : 'bg-zinc-800'} rounded-3xl`}>
      <SpillPostBody
        imgSrc={props.imgSrc}
        text={props.text}
        hash={props.hash}
        avatar={props.avatar}
        username={props.username}
      />

      {isExpanded && <SpillPostHeader avatar={props.avatar} username={props.username} />}
    </Article >
  )
}

export default SpillPostListItem