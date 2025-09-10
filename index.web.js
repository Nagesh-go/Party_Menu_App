import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('PartyMenuApp', () => App);
AppRegistry.runApplication('PartyMenuApp', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
