const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
    scrollRestoration: true,
  },
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
    '@expo/html-elements',
    '@expo/vector-icons',
    'expo-router',
    'react-native-safe-area-context',
    'react-native-vector-icons-for-web',
    'react-native-vector-icons',
    'react-native-gesture-handler',
    'nativewind',
    '@gorhom/bottom-sheet',
    'react-native-paper',
    'react-native-svg',
    'react-wavify',
    'react-native-reanimated-carousel',
    'expo-av',
    'expo-asset',
  ],

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg|mp4)$/,
      type: 'asset/resource',
    })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
}
module.exports = withExpo(nextConfig)
