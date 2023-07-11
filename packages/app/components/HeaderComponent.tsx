import { Header, Nav, Text, View, MotiLink, Pressable, Image } from "app/design/TailwindComponents"

import { FC, Fragment, useState } from "react"
import { Button, IconButton } from "react-native-paper"
import { usePathname } from 'solito/navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions, useWindowDimensions } from "react-native";
import { useRouter } from "next/router";


const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/news',
      isActive: (pathname) => pathname.startsWith('/news'),
      name: 'News',
      protected: false,
    },
    {
      pathname: '/team',
      isActive: (pathname) => pathname.startsWith('/team'),
      name: 'Team',
    },
    {
      pathname: '/careers',
      isActive: (pathname) => pathname.startsWith('/careers'),
      name: 'Careers',
    },
  ]



const authTabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/home',
      isActive: (pathname) => pathname.startsWith('/home'),
      name: 'Home',
    },
    {
      pathname: '/search',
      isActive: (pathname) => pathname.startsWith('/search'),
      name: 'Search',
      protected: false,
    },
    {
      pathname: '/spillboard',
      isActive: (pathname) => pathname.startsWith('/spillboard'),
      name: '#Spillboard',
      protected: false,
    }, {
      pathname: '/teapot',
      isActive: (pathname) => pathname.startsWith('/teapot'),
      name: 'Tea Pot',
    },


  ]



const HeaderComponent: FC = () => {
  const { width } = useWindowDimensions()
  const pathname = usePathname();
  const isMobile = window.innerWidth <= 720


  const { query } = useRouter()
  const urlStr = query?.id
  const getID = urlStr ?? [];

  const idRegex = /^\/user\/(.+)/;
  const match = pathname?.match(idRegex);

  const homePath = pathname === ('/home')
  const authPath = pathname?.startsWith('/home') || pathname?.startsWith('/spillboard') || pathname?.startsWith('/search') || pathname?.startsWith('/teapot') || match

  const nonAuthPath = pathname === '/' || pathname?.startsWith('/news') || pathname?.startsWith('/team') || pathname?.startsWith('/careers') || pathname?.startsWith('/404')


  console.log('im ID:', getID)
  return (
    <Header className={`fixed w-full z-30 top-0 text-white h-[70px] ${authPath ? 'bg-[#0b7b0e]' : 'bg-transparent'}`}>

      <View className="w-full max-w-7xl  mx-auto flex-row items-center justify-between mt-0 py-[16px]">

        <MotiLink href={authPath ? '/home' : '/'}
          className="ml-4 ">
          <svg height={30} viewBox="0 0 88 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-27a487fa=""><g clip-path="url(#a)" fill="#fff"><path d="M18.268 11.268c-1.2-1.127-3.07-1.955-5.72-2.531l-2.87-.61c-.765-.156-1.115-.333-1.275-.453a.497.497 0 0 1-.224-.434c0-.25.096-.42.322-.56.294-.185.788-.283 1.43-.283.64 0 1.157.118 1.441.34.285.225.504.663.652 1.304l.11.472 7.615-.704-.052-.56c-.213-2.31-1.17-4.123-2.846-5.385C15.21.627 12.95 0 10.137 0 7.142 0 4.771.67 3.09 1.992 1.362 3.348.488 5.269.488 7.699c0 1.964.636 3.56 1.892 4.742 1.214 1.145 3.116 1.981 5.653 2.487l2.893.58c.751.154 1.087.335 1.235.461.11.093.235.242.235.577 0 .317 0 1.057-1.87 1.057-.87 0-1.527-.167-1.954-.497-.41-.317-.66-.816-.757-1.524l-.068-.48H0l.041.598c.19 2.734 1.157 4.829 2.877 6.225C4.61 23.302 7.03 24 10.108 24c3.078 0 5.65-.68 7.361-2.022 1.755-1.377 2.647-3.379 2.647-5.951 0-2.004-.622-3.606-1.848-4.76ZM37.51 2.573C35.963 1.23 33.624.55 30.56.55h-8.814v22.902h7.216v-6.529h1.628c6.165 0 9.291-2.765 9.291-8.217 0-2.702-.797-4.765-2.372-6.132h.001ZM32.7 8.736c0 .636-.14 1.076-.415 1.309-.21.177-.668.39-1.664.39h-1.659V7.037h1.659c.996 0 1.455.212 1.664.39.275.232.415.672.415 1.308ZM49.305.549H41.82v22.902h7.485V.549Zm10.167 0h-7.485v22.902h16.175l.674-6.38h-9.364V.548ZM77.836 17.07V.55H70.35v22.902h16.175l.674-6.38h-9.364Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h87.2v24H0z"></path></clipPath></defs></svg>
        </MotiLink>
        {!authPath ?
          <Pressable className="block lg:hidden mr-4">
            <svg width="25" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-27a487fa=""><path d="M1.566 3.344C.816 3.344.22 2.699.22 1.973.219 1.234.816.59 1.566.59h21.868c.75 0 1.347.62 1.347 1.383 0 .738-.597 1.37-1.347 1.37H1.566Zm0 5.578C.816 8.922.22 8.277.22 7.55c0-.75.597-1.383 1.347-1.383h21.868c.75 0 1.347.621 1.347 1.383 0 .738-.597 1.37-1.347 1.37H1.566Zm0 5.59c-.75 0-1.347-.657-1.347-1.383 0-.738.597-1.371 1.347-1.371h21.868c.75 0 1.347.61 1.347 1.37 0 .74-.597 1.384-1.347 1.384H1.566Z" fill="#fff"></path></svg>
          </Pressable> :
          <Pressable>
            <Image
              className="lg:hidden bg-white mx-5  h-10 w-10 rounded-full border-[#fff] border-[1px]"
              unoptimized
              contentFit='cover'
              alt="app image"
              width={200}
              height={200}
              src={'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg'}
            />
          </Pressable>

        }

        {nonAuthPath &&
          <Nav className="w-full mr-4 space-x-4 flex-row lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20" >
            {tabs.map((tab) => {
              const active = tab.isActive(pathname)
              // if (tab.protected && !auth) {
              //   return null
              // }
              return (

                <Fragment key={tab.pathname} >
                  <MotiLink
                    href={tab.pathname}
                    animate={({ hovered, pressed }) => {
                      'worklet'

                      return {
                        scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                      }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}
                  >
                    <Text selectable={false}
                      className={`mr-5 text-[16px] font-black font-[SFProDisplay-Bold] tracking-widest leading-90
    ${active ? 'text-[#efcf37]' : 'text-[#fff]'}
    
    `}        >
                      {tab.name}
                    </Text>
                  </MotiLink>

                </Fragment>

              )
            })}
            {!homePath &&
              <MotiLink href='/home'
                className={`mx-auto lg:mx-0  bg-[#ec562a] text-gray-200 font-bold rounded-lg mt-4  lg:mt-0 py-2 px-8`}>Login</MotiLink>
            }
          </Nav>
        }

        {authPath &&
          < Nav className={` ${isMobile ? 'hidden' : ''} w-full mr-4 space-x-4 flex-row lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20`}>

            {authTabs.map((tab) => {
              const active = tab.isActive(pathname)
              // if (tab.protected && !auth) {
              //   return null
              // }
              return (

                <Fragment key={tab.pathname} >
                  <MotiLink
                    href={tab.pathname}
                    animate={({ hovered, pressed }) => {
                      'worklet'

                      return {
                        scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                      }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}
                  >
                    <Text selectable={false}
                      className={`mr-5 text-[16px] font-black font-[SFProDisplay-Bold] tracking-widest leading-90
    ${active ? 'text-[#efcf37]' : 'text-[#fff]'}
    
    `}        >
                      {tab.name}
                    </Text>
                  </MotiLink>

                </Fragment>

              )
            })}

            <Pressable>
              <Image
                className="bg-white ml-5  h-10 w-10 rounded-full border-[#fff] border-[1px]"
                unoptimized
                contentFit='cover'
                alt="app image"
                width={200}
                height={200}
                src={'https://i.pinimg.com/originals/6f/64/43/6f6443436071a11d533bbacf4d00361a.jpg'}
              />
            </Pressable>

          </Nav>

        }


      </View>
    </Header >
  )
}


export default HeaderComponent