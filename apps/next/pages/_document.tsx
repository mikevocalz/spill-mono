// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

import * as React from 'react'
import { AppRegistry } from 'react-native'


const fonts = [
  "SFProDisplay", "EntypoFont", "AntDesignFont", "EvilIconsFont", "FeatherFont", "FontAwesomeFont",
  "FoundationFont", "IoniconsFont", "MaterialCommunityIconsFont", "MaterialIconsFont",
  "OcticonsFont", "SimpleLineIconsFont", "ZocialFont", "MaterialIcons", "Poppins", "BebasNeue-Bold"
]

const customFontCss = fonts
  .map(
    (font) => `
    @font-face {
        font-family: '${font}';
        src: url('/fonts/${font}.ttf');
    }
`
  )
  .join('\n')
export const style = `
/**
 * Building on the RNWeb reset:
 * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
 */
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  padding: 0px;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
}
#__next {
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body {
  display: flex;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
  font-family:'SFProDisplay'
}
${customFontCss}
`

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });


    AppRegistry.registerComponent('Main', () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const styles = [
      <style key="style-reset" dangerouslySetInnerHTML={{ __html: style }} />,
      getStyleElement(),
    ]
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#0b7b0e" />
          <meta name="msapplication-navbutton-color" content="#0b7b0e" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#0b7b0e" />
        </Head>
        <body className="scrollbar-thin scrollbar-thumb-[#0b7b0e] scrollbar-track-[#efcf37] scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-32 overflow-y-scroll bg-gradient-to-r from-gray-300 to-[#c7dedc]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document