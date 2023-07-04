// Learn more https://docs.expo.dev/guides/monorepos
// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

// Find the project and workspace directories
const projectRoot = __dirname
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot]
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true

//4.Configure the react native packager
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname)
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [
        assetExts.filter((ext) => ext !== 'svg'),
        ...assetExts,
        'obj',
        'mtl',
        'jpg',
        'vrx',
        'hdr',
        'png',
        'jpeg',
        'gltf',
        'glb',
        'bin',
        'arobject',
        'gif',
        'svg',
        'pdf',
        'ttf',
        'mp4'
      ],
      sourceExts: [
        ...sourceExts,
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'cjs',
        'svg',
      ],
    },
  }
})()

module.exports = config
