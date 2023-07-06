import { ReactNode } from 'react'

import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import { View } from '../../design/view';

import FooterComponent from 'app/components/FooterComponent';
import HeaderComponent from 'app/components/HeaderComponent';


import { useWindowDimensions } from 'react-native'


function WebLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <HeaderComponent />
      <View className='min-h-full min-w-screen items-center pt-[70px] bg-black overflow-y-hidden'>
        {children}
        <FooterComponent />
      </View>
    </>
  )
}


export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })