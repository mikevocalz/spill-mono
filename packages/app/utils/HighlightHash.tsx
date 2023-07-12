/* eslint-disable react/jsx-key */
import { View, Text, Span } from "app/design/TailwindComponents";
import { useAppStore } from "app/store/store";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { fontPixel, heightPixel } from "./normalize";



const HighlightedHashtags = ({ text, index }) => {

  const iKey = Math.floor(Math.random() * (index + 1)) + index;



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
        <Span style={{ color: '#efcf37' }} key={iKey}
          className="font-bold drop-shadow-2xl text-[#efcf37]">
          {word + ' '}
        </Span >
      );
    } else {
      // If the word is not a hashtag word, return it as is
      return (
        <Text key={iKey}
          numberOfLines={4} className="text-white">{word}</Text>
      )
    }
  });

  return (
    <Text
      numberOfLines={5}
      allowFontScaling={true}
      minimumFontScale={0.5}
      textBreakStrategy='highQuality'
      style={{
        width: '100%',
        textAlignVertical: 'top',
        lineHeight: isWeb ? 46 : null,
        alignSelf: 'stretch',
        textAlign: 'left',
        flexWrap: 'wrap',
        shadowColor: "#000",
        elevation: 5,
        shadowOpacity: isWeb ? 1 : .5,
        shadowOffset: {
          width: 0,
          height: isWeb ? 0 : 2
        },
        shadowRadius: isWeb ? 0 : 1,
        paddingBottom: isWeb ? 10 : 4,

        //includeFontPadding: true,
        fontFamily: isWeb ? '' : 'SFProDisplay',
        //fontSize: !isWeb && width <= 1280 ? fontPixel(32) : !isWeb && width <= 768 ? fontPixel(26) : !isWeb && width <= 450 ? fontPixel(20) : 50,
      }}
      key={iKey}
      className={`flex flex-wrap break-words font-[SFProDisplay] text-left text-white ${isWeb ? 'text-3xl xs:text-[36px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px]' : 'ml-[8px] text-[20px] xs:text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'} `}>

      {highlightedWords}
    </Text>
  )
};




export default HighlightedHashtags