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

  const isWeb = Platform.OS === 'web';

  const isExpanded = useAppStore((state) => state.isExpanded)

  // Regular expression to find hashtag words
  const hashtagRegex = new RegExp(/#[a-z0-9-_]+(?![.:,!?])/gi);


  // Split the text into an array of words
  const words = text.split(/(\s+)/);

  // Map over the words and highlight the hashtag words
  const highlightedWords = words.map((word, index) => {
    if (hashtagRegex.test(word)) {
      // If the word is a hashtag word, wrap it in a Text component with yellow color
      return (
        <Span style={{ color: '#efcf37' }} key={index} className="font-bold drop-shadow-2xl text-[#efcf37]">
          {word + ' '}
        </Span >
      );
    } else {
      // If the word is not a hashtag word, return it as is
      return (
        <Text numberOfLines={4} className="text-white">{word}</Text>
      )
    }
  });

  return (
    <Text
      numberOfLines={6}
      allowFontScaling
      minimumFontScale={10}

      style={{
        shadowColor: "#000",
        elevation: 5,
        shadowOpacity: isWeb ? 1 : .5,
        shadowOffset: {
          width: 0,
          height: isWeb ? 0 : 2
        },
        shadowRadius: isWeb ? 0 : 1,
        paddingBottom: 5,
        fontFamily: isWeb ? '' : 'SFProDisplay-Bold'
        // fontSize: width <= 1280 ? fontPixel(20) : width <= 768 ? fontPixel(26) : width <= 450 ? fontPixel(16) : fontPixel(20),
      }}
      className={`flex font-medium flex-wrap break-all font-[SFProDisplay-Bold]  text-left font-regular text-white ${isWeb ? 'text-xl xs:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px]' : 'ml-[8px]'} xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl`}>

      {highlightedWords}
    </Text>
  )
};




export default HighlightedHashtags