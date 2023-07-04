module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      'react-native-reanimated/plugin',
      'nativewind/babel',
      require.resolve('expo-router/babel'),
      'react-native-paper/babel',
      '@babel/plugin-proposal-export-namespace-from',
      [
        '@babel/plugin-proposal-private-property-in-object',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'solito/image': 'solito/image/expo',
          },
        },
      ],
    ],
  }
}
