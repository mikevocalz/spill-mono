/* eslint-disable react/jsx-key */
import { View, Text, Span } from "app/design/TailwindComponents";
import { useAppStore } from "app/store/store";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { fontPixel } from "./normalize";


const HighlightedHashtags = ({ text }) => {




  const { width } = useWindowDimensions()

  function fontSizes() {
    if (width > 600) {
      fontPixel(48)
    }
    else fontPixel(48)
  }

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

  return <Text
    //adjustsFontSizeToFit
    numberOfLines={4}
    allowFontScaling={true}
    style={{
      fontSize: width > 600 ? fontPixel(60) : width < 600 ? fontPixel(38) : width > 600 ? fontPixel(40) : width > 400 ? fontPixel(20) : fontPixel(10)
    }}
    className="flex flex-wrap flex-row w-full break-all font-[SFProDisplay-Bold] "
  >{highlightedWords} </Text>
};




export default HighlightedHashtags