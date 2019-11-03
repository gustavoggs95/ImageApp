/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent('Home', () => require('./src/Home').default);
Navigation.registerComponent('Screen', () => require('./src/Screen').default);

const bottomTabs = {
    id: 'BottomTabsId',
    children: [
      {
        component: {
          name: 'Screen',
          options: {
            bottomTab: {
              text: 'Text1',
              icon: require('./src/assets/image1.png'),
            }
          }
        },
      },
      {
        component: {
          name: 'Home',
          options: {
            bottomTab: {
              text: 'Text2',
              icon: require('./src/assets/image2.png'),
            }
          }
        },
      }
    ]
  }

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        bottomTabs
    }
  });
});
