/* eslint-disable react/jsx-key */
import { View, Text, Span } from "app/design/TailwindComponents";
import { useAppStore } from "app/store/store";
import { fontPixel } from "./normalize";
import { useWindowDimensions } from "react-native";



const HighlightedHashtags = ({ text }) => {
  const fontSizes = () => {
    if (width >= 600) {
      fontPixel(48)
    }
    return
  }

  const { width } = useWindowDimensions()
  const isExpanded = useAppStore((state) => state.isExpanded)

  // Regular expression to find hashtag words
  const hashtagRegex = /#[\w]+(?=\s|$)/g

  // Split the text into an array of words
  const words = text.split(' ');

  // Map over the words and highlight the hashtag words
  const highlightedWords = words.map((word, index) => {
    if (hashtagRegex.test(word)) {
      // If the word is a hashtag word, wrap it in a Text component with yellow color
      return (
        <Span key={index} className="font-bold drop-shadow-2xl text-[#efcf37]">
          {word + ''}
        </Span >
      );
    } else {
      // If the word is not a hashtag word, return it as is
      return <Text key={index}
        numberOfLines={4} className="text-white">{word} </Text>;
    }
  });

  return <Text numberOfLines={4}
    allowFontScaling={true}
    style={{

      flexWrap: 'wrap',
      fontFamily: 'SFPro'
    }}
    className="flex flex-row w-full break-words font-[SFProDisplay-Bold]"
  >{highlightedWords} </Text>
};

export default HighlightedHashtags