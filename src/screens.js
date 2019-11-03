import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Screen', () => require('./Screen').default);
  Navigation.registerComponent('Home', () => require('./Home').default);
}