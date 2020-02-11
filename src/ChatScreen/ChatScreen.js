import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from 'HomeScreen';
import { ProfileScreen } from 'Profile';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;