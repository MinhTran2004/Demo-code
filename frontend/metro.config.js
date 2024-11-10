const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    unstable_allowRequireContext: true,
  },
  resolver: {
    // Thêm 'svg' vào sourceExts và loại bỏ nó khỏi assetExts
    sourceExts: [...sourceExts, 'svg'],
    assetExts: [...assetExts, 'png'],  // Thêm 'png' vào assetExts để xử lý hình ảnh
    
    alias: {
      '@images': './src/assets/images',
      '@view': './src/view',
      '@model': './src/model',
      '@component': './src/component',
      '@service': './src/service',
      '@viewmodel': './src/viewmodel',
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
