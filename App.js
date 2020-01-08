/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView source={{uri: 'https://google.com'}} style={styles.webView} />
  );
};

const styles = StyleSheet.create({
  webView: {
    marginTop: 20,
  },
});

export default App;
