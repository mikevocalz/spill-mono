/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, FlatList } from "app/design/TailwindComponents";
import { MotiView, MotiScrollView, AnimatePresence } from "moti";
import React, { useRef, useEffect } from 'react';
import { FlatList as RNFLAT, Platform, Dimensions } from 'react-native';

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';

const movies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
  { id: 3, title: 'Movie 3' },
  { id: 4, title: 'Movie 4' },
  { id: 5, title: 'Movie 5' },
  { id: 6, title: 'Movie 6' }
  // Add more movies as needed
];

const HashTagList = () => {

  const loopedData = movies.concat(movies[0])
  const scrollViewRef = useRef(null);
  const scrollX = useSharedValue(0);
  const { width } = Dimensions.get('window');

  const animatedScrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -scrollX.value }],
    };
  });

  useEffect(() => {
    const totalWidth = width * movies.length;
    const animationDuration = 3000 * movies.length;

    const animationLoop = setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 0, animated: false });
        scrollX.value = 0;
      }
    }, animationDuration);

    return () => {
      clearTimeout(animationLoop);
    };
  }, [movies, width, scrollX]);

  return (
    <View>
      <MotiScrollView ref={scrollViewRef} horizontal>

        {movies.map((movie) => (
          <AnimatePresence key={movie.id} exitBeforeEnter>
            <View style={{ width: 200, height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', marginHorizontal: 10 }}>
              <Text>{movie.title}</Text>
            </View>
          </AnimatePresence>
        ))}
      </MotiScrollView>
    </View>
  );
};


export default HashTagList