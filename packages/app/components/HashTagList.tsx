/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, FlatList, MotiPressable } from "app/design/TailwindComponents";
import { fontPixel } from "app/utils/normalize";
import { MotiView, MotiScrollView, AnimatePresence } from "moti";
import React, { useRef, useEffect } from 'react';
import { FlatList as RNFLAT, Platform, Dimensions } from 'react-native';

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';

const movies = [
  { id: 1, title: 'loveSpill' },
  { id: 2, title: 'Spill' },
  { id: 3, title: 'JamiFoxx' },
  { id: 4, title: 'ZaddieOfSill' },
  { id: 5, title: 'BaddiesOfSpill' },
  { id: 6, title: 'BlackSpill' },
  { id: 7, title: 'MusicSpill' },
  { id: 8, title: 'EssenceFest' },
  { id: 9, title: 'SpillVille' },
  { id: 10, title: 'Spillionaire' },
  { id: 11, title: 'Twitter' },
  { id: 12, title: 'Threads' },
  { id: 13, title: 'blueSky' },
  { id: 14, title: 'MarvelSpill' },
  { id: 15, title: 'DCSpill' },
  { id: 16, title: 'PowerRangersSpill' },
  { id: 17, title: 'BookSpill' },
  { id: 18, title: 'SelfiesSpill' },
  { id: 19, title: 'FoodieSpill' },
  { id: 20, title: 'NBASpill' },
  { id: 21, title: 'MBASpill' },
  { id: 22, title: 'WNBASpill' },
  { id: 23, title: 'NFLSpill' },
  { id: 24, title: 'ArtSpill' }
  // Add more movies as needed
];

const HashTagList = () => {

  const loopedData = movies.concat(movies).slice().sort(() => Math.random() - 0.5)
  const scrollViewRef = useRef(null);
  const scrollX = useSharedValue(0);
  const { width } = Dimensions.get('window');



  return (
    <View className="mx-auto flex mx-auto items-center justify-center flex-row min-w-screen max-w-4xl flex-wrap mb-10">

      {loopedData.map((movie, index) => (
        <AnimatePresence key={index} exitBeforeEnter>
          <MotiPressable
            from={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 1000 }}
            className="flex rounded-full mx-1 my-2 px-4 py-2 bg-[#ec562a] justify-center" >
            <Text style={{
              fontSize: fontPixel(14)
            }}
              className="text-white font-[SFProDisplay] text-center font-bold">#{movie.title}</Text>
          </MotiPressable>
        </AnimatePresence>
      ))}

    </View>
  );
};


export default HashTagList