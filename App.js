import React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

// NAVIGATION
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


// IMPORT SCREENS
import HomeScreen from './src/Screens/HomeScreen.js';
import InsightsScreen from './src/Screens/InsightsScreen';
import RemindersScreen from './src/Screens/RemindersScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import DetailsScreen from './src/Screens/DetailsScreen';


/////////////////////////////////
/// Icon with Badge and count
/////////////////////////////////

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount = 2, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // If you're using react-native < 0.57 overflow outside of parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}); 

const SettingsStack = createStackNavigator({
  Profile: ProfileScreen,
  Details: DetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      People: HomeStack,
      Insights: InsightsScreen,
      Reminders: RemindersScreen,
      Profile: ProfileScreen
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'People') {
            iconName = `ios-heart${focused ? '' : '-empty'}`;
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
            // IconComponent = HomeIconWithBadge;
          } else if (routeName === 'Insights') {
            iconName = `ios-stats`;
          } else if (routeName === 'Reminders') {
            iconName = `ios-notifications`;
          } else if (routeName === 'Profile') {
            iconName = `ios-walk`;
          }

          // You can return any component that you like here!
          return <IconComponent name={iconName} size={24} color={tintColor} />;

          // Icon with badgeCount
          // return <IconWithBadge name={iconName} size={25} color={tintColor} badgeCount={2} />

          // FONTAWESOME play
          // return <IconComponent icon={iconName} style={{ fontSize: 32 }} color={tintColor} />;
          // return <IconComponent icon="coffee" />  
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 16,
        },
        style: {
          backgroundColor: 'light-grey',
        },
      },

    }
  )
);




// import React from 'react';
// import { Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });

// export default createAppContainer(TabNavigator);
