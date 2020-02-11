import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

import HomeScreen from '../Screens/HomeScreen.js';


// NAVIGATION
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* other code from before here */}
      <Text>Details page</Text>
      {/* <Button
        title="Go Back"
        onPress={() => navigation.navigate('Home')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const DetailsStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen
// }); 

export default DetailsScreen;
