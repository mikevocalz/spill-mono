import { TextLink, } from 'app/design/typography'
import { Row, } from 'app/design/layout'
import { A, H1, Image, P, ScrollView, Section, Text, TextInput, } from 'app/design/TailwindComponents'
import Wave from 'react-wavify';
import { MotiLink } from 'solito/moti'
import { Button } from 'react-native-paper'
import { ScreenScrollView } from 'app/components/ScreenSrollView'
import { Pressable } from 'app/design/TailwindComponents';
import { useState, useEffect } from 'react';
import { View } from 'app/design/view';

import Carousel from 'react-native-reanimated-carousel';
import { Dimensions } from 'react-native';


const FirstRowImages = [
  "https://cdn.sanity.io/images/f8rlzpzw/production/b8624821d7e1ff710b1a73aca360751d36cf3116-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/8ec8495f3e677e7db99281b4d331fe0e696541fa-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/88278bdad2f3e35b9c50c787de6c19afb45b9c74-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/33296586b6f7080141736dc3a215a2ee5a261634-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/d65e2a50e4b5fc3275b9aa207086b5580d8aa177-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/785a925c337a324568742f9cfcda5449224e7d4d-759x868.png?w=800&auto=format",
]
const SecondRowImages = [
  "https://cdn.sanity.io/images/f8rlzpzw/production/996a83dd2ea2240a13a52f6ff08e27abbb8339cd-759x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/a1193289cee6dc0840bc3f3f77701d371e72967f-759x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/35bada81f5603289dba5554bd463f0c695a9587c-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/a91324d4489715657244bfb7c6fa0476afea6749-758x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/04249b71702483dcd7f18cb06d969fc375e80329-759x868.png?w=800&auto=format",
  "https://cdn.sanity.io/images/f8rlzpzw/production/d071286a6f487889883c375a3d7c1d157be3c194-758x868.png?w=800&auto=format",
]

const { width } = Dimensions.get('screen');

export function LandingScreen() {
  const [bgColor, setBgColor] = useState<string>('#000');



  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 2400) {
      setBgColor('#000')
    } else {
      setBgColor('#0e25cf')
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <ScreenScrollView
      className="flex-1 bg-black items-center justify-center w-screen pt-40 pb-[100px]">

      <Text className='font-[SFProDisplay] text-white mb-10 text-5xl md:text-6xl flex-col flex text-center'>SPILL is visual
        <Text>conversation at the</Text>
        <Text>speed of culture</Text>
      </Text>

      <Pressable className='bg-white text-black font-bold rounded-xl px-5 py-2 md:hidden'
        onPress={() => console.log('Pressed')}>
        Join the Waitlist
      </Pressable>

      <Wave
        fill='#0e25cf'
        paused={false}
        className='z-10 pt-10 -mt-[80px] md:-mt-[60px]'
        options={{
          height: 40,
          amplitude: 65,
          speed: 0.35,
          points: 2
        }} />
      <Section className='bg-[#0e25cf] w-full items-center mt-0 pb-[200px]' >
        <View className='max-w-7xl px-10 ' >

          <Image className="w-[340px] mt-[40px] md:mt-[100px]  rounded-xl "
            priority
            unoptimized
            contentFit='contain'
            alt="app image"
            width={200}
            height={360}
            src={'https://cdn.sanity.io/images/f8rlzpzw/production/4339fa33047fde18c990ad0a347f42fdca15d1e6-1188x2424.png'}
          />

        </View>




        <Carousel
          loop
          width={width}
          height={400}
          autoPlay={true}
          style={{
            marginTop: 200
          }}
          data={[...new Array(1).keys()]}
          autoPlayInterval={2000}
          scrollAnimationDuration={10000}
          renderItem={({ item, index }): any => {
            return (
              <ScrollView
                horizontal
                className='w-full'
              >
                {FirstRowImages.map((img, index) => {
                  return (<Image key={index}
                    className="w-[200px] md:w-[340px] rounded-xl md:mx-10 mx-3 "
                    priority
                    unoptimized
                    contentFit='contain'
                    alt="app image"
                    width={200}
                    height={360}
                    src={img}
                  />
                  )
                }
                )
                }
              </ScrollView>
            )
          }
          }
        />



        <Carousel
          loop
          width={width}
          height={400}
          autoPlayReverse
          autoPlay={true}
          style={{
            marginTop: -20
          }}
          data={[...new Array(1).keys()]}
          autoPlayInterval={2000}
          scrollAnimationDuration={10000}
          renderItem={({ item, index }): any => {
            return (
              <ScrollView
                horizontal

                className='w-full md:mt-10 -mt-[170px] z-100 h-full'
              >
                {SecondRowImages.map((img, index) => {
                  return (<Image key={index}
                    className="w-[200px] md:w-[340px] rounded-xl md:mx-10 mx-3 "
                    priority
                    unoptimized
                    contentFit='contain'
                    alt="app image"
                    width={200}
                    height={360}
                    src={img}
                  />
                  )
                }
                )
                }
              </ScrollView>
            )
          }
          }
        />

      </Section>


      <View
        style={{
          backgroundColor: bgColor
        }}
        className="w-full  md:mt-0 md:py-[100px] -mt-[280px]" >
        <Section
          className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-20">
          <View className="flex flex-col items-center justify-center p-10 gap-3">
            <video className="w-90 max-w-[440px] rounded-2xl" autoPlay={true} loop controls muted>
              <source src="https://player.vimeo.com/progressive_redirect/playback/835568558/rendition/1080p/file.mp4?loc=external&signature=06c7f0a32f335a13d52915f160e4408ed0d16bd8bfc96e25e9d41fc63049f129" type="video/mp4" />
            </video>
          </View>

          <View className="flex p-10 gap-4 mt-3 sm:mt-6 items-center justify-center">
            <Text className='font-[SFProDisplay]  leading-[50px] text-white mb-10 text-2xl md:text-[38px]  text-left'>
              See What's Tea in Your Community on Spill</Text>
          </View>
        </Section>


        <Section
          className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-20">
          <View className="flex p-10 gap-4 mt-3 sm:mt-6 items-center justify-center">
            <Text className='font-[SFProDisplay]  leading-[50px] text-white mb-10 text-2xl md:text-[38px]  text-left'>
              Express your thoughts by easily combining text with image, video, GIF and more</Text>
          </View>

          <View className="flex flex-col items-center justify-center p-10 gap-3">
            <video className="w-90 max-w-[440px] rounded-2xl" autoPlay={true} loop controls muted>
              <source src="https://player.vimeo.com/progressive_redirect/playback/835568718/rendition/1080p/file.mp4?loc=external&signature=0daf872ad78990b1dcb2f931956f9c3523697dad2bd3559617dd111c8b681116" type="video/mp4" />
            </video>
          </View>
        </Section>

        <Section
          className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-20">
          <View className="flex flex-col items-center justify-center p-10 gap-3">
            <video className="w-90 max-w-[440px] rounded-2xl" autoPlay={true} loop controls muted>
              <source src="https://player.vimeo.com/progressive_redirect/playback/835568767/rendition/1080p/file.mp4?loc=external&signature=9026d34643c1697cb2d5c3db10815e25c43877af0e8e84abf179d25876cb3f5d" type="video/mp4" />
            </video>
          </View>

          <View className="flex p-10 gap-4 mt-3 sm:mt-6 items-center justify-center">
            <Text className='font-[SFProDisplay]  leading-[50px] text-white mb-10 text-2xl md:text-[38px]  text-left'>
              Discover the hottest Spills and most popular trends from all over the world</Text>
          </View>
        </Section>


        <Section
          className="mx-auto  items-center justify-center pb-[300px]">
          <View className="max-w-7xl items-center justify-center p-10 ">
            <View style={{ zIndex: 1000 }}
              className='items-center w-full z-100 absolute top-20 left-0 right-0'>
              <Text className='font-[SFProDisplay] text-3xl text-white mb-4 font-bold text-center z-100'>Join the Waitlist</Text>
              <Text className='font-[SFProDisplay] text-[16px] font-extralight	 text-white mb-6 text-center z-100'>We'll hit you up when the time comes</Text>
              <TextInput
                style={{
                  backgroundColor: '#000'
                }}
                className='w-[80%] h-14 justify-center my-6 bg-black'
                placeholder='Name'
              />
              <TextInput
                style={{
                  backgroundColor: '#000',
                }}
                className='w-[80%] h-14 justify-center mb-6  bg-black'
                placeholder='Email'
              />
              <TextInput
                style={{
                  backgroundColor: '#000'
                }}
                className='w-[80%] h-14 justify-center mb-6 bg-black'
                placeholder='Anything you want to Spill?'
              />
              <Pressable
                className='w-[80%] h-14 text-white font-bold items-center rounded-xl justify-center mb-6 bg-black/[.09]'>
                Submit
              </Pressable>

            </View>
            <video className="rounded-xl w-full z-10 max-h-screen h-auto min-w-full max-w-7xl" autoPlay={true} loop muted >
              <source src="https://www.spill.com/_nuxt/emojis.42e82d3b.mp4" type="video/mp4" />
            </video>
          </View>
        </Section>
      </View>


    </ScreenScrollView >
  )
}
