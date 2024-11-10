module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],  // Thêm .ts, .tsx nếu bạn sử dụng TypeScript
        alias: {
          '@images': './src/assets/images',
          '@view': './src/view',
          '@model': './src/model',
          '@component': './src/component',
          '@service': './src/service',
          '@viewmodel': './src/viewmodel',
        },
      },
    ],
    'inline-dotenv',
    'react-native-reanimated/plugin',
  ],
};
