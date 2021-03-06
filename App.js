import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';
import {
  AppLoading, Asset, Font, Icon
} from 'expo';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAZ2DBfeq4ErIBYRa2q1nAiltrpuydTd94',
      databaseURL: 'https://ofx-demo.firebaseio.com',
    };

    firebase.initializeApp(firebaseConfig);
  }


  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          // eslint-disable-next-line no-underscore-dangle
          startAsync={this._loadResourcesAsync}
          // eslint-disable-next-line no-underscore-dangle
          onError={this._handleLoadingError}
          // eslint-disable-next-line no-underscore-dangle
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
