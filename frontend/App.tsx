import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LayoutAuth from '@view/auth/_layout';
import Store from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>  {/* Cung cấp store cho ứng dụng */}
      <NavigationContainer>
        <LayoutAuth />
      </NavigationContainer>
    </Provider>
  );
}
