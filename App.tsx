import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Touchable,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Main from './src/components/Main';
import {NativeRouter} from 'react-router-native';

const App = () => {
  console.log('hola');
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};

export default App;
