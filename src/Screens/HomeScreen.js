import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import DetailsScreen from '../Screens/DetailsScreen';


// import {createAppContainer} from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

// NAVIGATION
import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>PEOPLES yeash</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}); 

export default HomeStack;



// Class based approach
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         {/* other code from before here */}
//         <Text>PEOPLES yeah</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }
