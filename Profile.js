import 

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="This is Jane's profile"
        onPress={() => navigate('HomeScreen', { name: 'Jane' })}
      />
    );
  }
}

Export default Profile