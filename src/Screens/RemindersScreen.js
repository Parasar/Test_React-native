import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

// NAVIGATION
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

const RemindersScreen = () => {
  return (
    <View style={styles.container}>
      {/* other code from before here */}
      <Text>REMINDERS</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}
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

export default RemindersScreen;
